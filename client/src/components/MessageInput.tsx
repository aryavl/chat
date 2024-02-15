import { postMessage } from "@/helper/fetcher";
import { setMessages } from "@/lib/features/messageSlice";
import { useAppDispatch, useStateUseSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";
import { DefaultEventsMap } from "@socket.io/component-emitter";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import InputEmoji from "react-input-emoji";
import io, { Socket } from 'socket.io-client';

const MessageInput = ({ chat }: { chat: { _id: string } }) => {
  const [showEmojie, setShowEmojie] = useState<string>("");
  const [inputMessage, setInputMessage] = useState<string>("");
  const [socket, setSocket] = useState<Socket<DefaultEventsMap, DefaultEventsMap> | null>(null);
  // const [messages, setMessages] = useState<{ senderId: string; text: string }[]>([]);
  const dispatch = useAppDispatch()
  const selectedUser = useStateUseSelector(
    (state: RootState) => state.user.selectedUser
  );
  const messages = useStateUseSelector((state:RootState)=>state.message.messages)

  useEffect(() => {
    // Connect to the socket server
    const newSocket = io('http://localhost:8800');
    setSocket(newSocket);
    newSocket.emit('join-chat', chat._id);
    // Listen for incoming messages
    newSocket.on('receive-message', (message) => {
      // setMessages((prevMessages) => [...prevMessages, message]);
      dispatch(setMessages(message))
    });

    // Clean up the socket connection on component unmount
    return () => {
      newSocket.disconnect();
    };
  }, [chat,dispatch]);

  const handleChange = (newText: string) => {
    setShowEmojie(showEmojie);
    setInputMessage(newText);
  };

  const inputHandleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const data = {
      chatId: chat._id,
      senderId: selectedUser._id,
      text: inputMessage,
    };

    try {
      // Optimistically update the UI
      const message={
        senderId: selectedUser._id, text: inputMessage 
      }

      dispatch(setMessages([message]))
      setInputMessage("");
  
      // Post the message to the server
      await postMessage(data);
  
      // Emit the message to the socket server
      if (socket) {
        socket.emit('send-message', data);
      }
    } catch (error) {
      // Handle the error, for example, by displaying an error message to the user
      console.log(error);
      dispatch(setMessages([])); 
      // Optionally, you might want to revert the UI state if the message failed to send
    }
  };

  return (
    <div>
      
      <form onSubmit={inputHandleSubmit} className="mt-auto relative">
        <div className="w-full relative flex justify-between items-center">
          <InputEmoji value={inputMessage} onChange={handleChange} />
          <button type="submit" className="btn">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default MessageInput;
