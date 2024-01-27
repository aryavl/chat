"use client"
import { setUserList } from "@/lib/features/userSlice";
import { useStateUseSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import ChatItem from "./ChatItem";

const fetcher = async() =>{
    const userList = await fetch("http://localhost:3003/login/users");
    const result = await userList.json();
    console.log(result);
    return result
}
const ChatList = () => {

    const dispatch = useDispatch()
    useEffect(()=>{
        const fetchData = async () => {
            try {
              const res = await fetcher();
              console.log(res);
              dispatch(setUserList(res));
            } catch (error) {
              console.error("Error fetching user list:", error);
            }
          };
      
          fetchData();
    
    },[dispatch])

  const user = useStateUseSelector((state: RootState) => state.user.user);
  const userList = useStateUseSelector(
    (state: RootState) => state.user.userList
  );
  console.log(userList);
  const users = userList.filter(
    (userdata: any) => userdata.email !== user.email
  );
  console.log(users);

  return (
    <div className="my-5 flex flex-col">
      {/* chat item */}
      {
            users?(
              users?.reverse()?.map((user:any)=><ChatItem key={user._id} user={user}/>)
              
            ):(
              <span className='loading loading-ring w-16'></span>
            )
          }
    </div>
  );
};

export default ChatList;
