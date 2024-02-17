"use client";
import { chatFetcher, messageFetcher } from "@/helper/fetcher";
import { useAppDispatch, useStateUseSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";
import React, { useEffect, useState } from "react";
import MessageItem from "./MessageItem";
import { setMessages } from "@/lib/features/messageSlice";

interface Message {
  senderId: string;

  text: string;
}
const MessageList = ({
  chat,
}: {
  chat: {
    _id: string;
    members: string[];
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
}) => {
  // const [messages, setMessages] = useState<Message[]>([]);

  const currentUser = useStateUseSelector(
    (state: RootState) => state.user.user
  );
  const messages = useStateUseSelector(
    (state: RootState) => state.message.messages
  );
  const dispatch = useAppDispatch();
  console.log(messages, "messge list");

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const messageData: Message[] = await messageFetcher(chat._id);
        console.log(messageData);

        // setMessages(messageData);
        dispatch(setMessages(messageData));
      } catch (error) {
        console.log(error);
      }
    };

    fetchMessage();
  }, [currentUser, chat, dispatch]);

  return (
    <div className="overflow-auto w-full mb-10 flex flex-col max-h-[75vh] no-scrollbar">
       <div>
        {messages.map((message, index) => {
          let user = currentUser?._id === message?.senderId
          return(
          <div key={index}>
            
            <div className={`chat ${user ? "chat-start" : "chat-end"}`}>
              <div
                className={`chat-bubble ${
                  user ? "chat-bubble-primary " : "chat-bubble"
                }`}
              >
                {message.text}
                {/* <p className="text-xs ">{format(message.createdAt)}</p> */}
               </div> 
            </div>
          </div>
        )})}
      </div>
      {/* {messages
        ? messages.map((item: Message, i: number) => {
            return (
              <div key={i}>
                <MessageItem
                  user={currentUser?._id === item?.senderId}
                  message={item}
                />
              </div>
            );
          })
        : ""}  */}
    </div>
  );
};

export default MessageList;
