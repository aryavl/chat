"use client"
import { setUserList } from "@/lib/features/userSlice";
import { useStateUseSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import ChatItem from "./ChatItem";
import { chatFetcher, fetcher } from "@/helper/fetcher";

const ChatList = () => {

  const [chats, setChats] = useState<string[]>([])
  const user = useStateUseSelector((state:RootState)=>state.user.user)
  console.log(user);
  
  useEffect(()=>{
   const fetchData = async()=>{
    try {
      const chat = await chatFetcher(user._id)
      console.log(chat);
      setChats(chat)
    } catch (error) {
      console.log(error);
      
    }
   }
   fetchData()
  },[user])
  console.log(chats);
  
  
  return (
    <div className="my-5 flex flex-col">
      {/* chat item */}
      {
            chats?(
              chats?.reverse()?.map((user:any)=><ChatItem key={user._id} chat={user}/>)
              
            ):(
              <span className='loading loading-ring w-16'></span>
            )
          }
    </div>
  );
};

export default ChatList;
