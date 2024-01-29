"use client";
import { chatFetcher, messageFetcher } from "@/helper/fetcher";
import { useStateUseSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";
import React, { useEffect, useState } from "react";
import MessageItem from "./MessageItem";

interface Message {
  chatId: string;
  _id: string;
  senderId: string;
  text: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
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
  const [messages, setMessages] = useState<Message[]>([]);

  const currentUser = useStateUseSelector(
    (state: RootState) => state.user.user
  );
  console.log(chat,"messge list");
  

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const messageData: Message[] = await messageFetcher(chat._id);
        console.log(messageData);
        setMessages(messageData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMessage();
  }, [currentUser, chat]);

  return (
    <div className="overflow-auto w-full mb-10 flex flex-col max-h-[75vh] no-scrollbar">
      {messages
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
        : ""}
    </div>
  );
};

export default MessageList;
