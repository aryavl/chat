"use client"
import { useStateUseSelector } from '@/lib/hooks';
import { RootState } from '@/lib/store';
import React, { useEffect, useState } from 'react'
import TopMessageBar from './TopMessageBar';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import { chatFetcher, getSingleChat } from '@/helper/fetcher';

interface ChatProp {
  _id: string;
  members: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}
const Messages = () => {
  const [chats, setChats] = useState<ChatProp>()
  const currentUser = useStateUseSelector((state: RootState) => state.user.user);
  const selectedUser = useStateUseSelector((state: RootState) => state.user.selectedUser);
  useEffect(()=>{
    const fetchData = async()=>{
     try {
       const chat = await getSingleChat(currentUser._id,selectedUser._id)
       console.log(chat);
       setChats(chat)
     } catch (error) {
       console.log(error);
       
     }
    }
    fetchData()
  },[currentUser,selectedUser])
  console.log(chats);
  
  return (
    <div className='bg-image messages w-full min-h-screen z-0 hidden md:w1/2 lg:w-2/3 md:flex md:flex-col flex-col'>
    {/* Topbar */}
    <TopMessageBar />
    <div className={`max-w-sm md:max-w-3xl w-full mx-auto mt-auto mb-10 ${selectedUser?"":"md:hidden"}`}>
        {/* messages list */} 
        {/* {
          chats?(
            chats?.reverse()?.map((user:any)=><MessageList key={user._id}  chat={user}/>)
            
          ):(
            <span className='loading loading-ring w-16'></span>
          )
        } */}
        {
          chats?
          <MessageList chat={chats}/>:
          (
            <span className='loading loading-ring w-16'></span>
          )
        }
        {/* message input */}
        <MessageInput/>
    </div>
</div>
  )
}

export default Messages