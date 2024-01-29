"use client";

import { postMessage } from "@/helper/fetcher";
import { useStateUseSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";
import { SendMsIcon, SmileFaceIcon } from "@/utils/icons";
import dynamic from "next/dynamic";
import React, { useEffect, useRef, useState } from "react";
import InputEmoji from "react-input-emoji";


const MessageInput =  ({
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
  const [showEmojie, setShowEmojie] = useState<string>("");
  const [inputMessage, setInputMessage] = useState<string>("");
const selectedUser = useStateUseSelector((state: RootState) => state.user.selectedUser);

    
  const currentTheme = useStateUseSelector(
    (state: RootState) => state.theme.currentTheme
  );

  const handleChange = (newText: string) => {
    setShowEmojie(showEmojie);
    setInputMessage(newText); 
  };
  const inputHandleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const data = {
        chatId:chat._id,
        senderId:selectedUser._id,
        text:inputMessage
    }
    try {
    const response = await postMessage(data)
    console.log(response);
    
    if(response.ok){
        setInputMessage("")
        setShowEmojie("")
    }else if (response.status === 500) {
        
        console.error("Internal Server Error:", response.statusText);
      }
    } catch (error) {
        console.log(error);
        
    }
  };
// console.log(showEmojie,"message input",inputMessage);

  return (
    <form onSubmit={inputHandleSubmit} className="mt-auto relative">
      <div className=" w-full relative flex justify-between items-center">
        <InputEmoji value={showEmojie} onChange={handleChange} />
        <button type="submit" className={`${currentTheme} btn`}>
          Send
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
