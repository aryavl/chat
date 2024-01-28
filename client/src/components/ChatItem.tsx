"use client"
import { chatFetcher, getChatuser } from "@/helper/fetcher";
import { setSelectedUser } from "@/lib/features/userSlice";
import { useAppDispatch, useStateUseSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
interface UserProp {
  name:string,
  email:string,
  createdAt:string,
  updatedAt:string,
  __v:number,
  _id:string
}

const ChatItem = ({
  chat,
}: {
  chat: {
    _id: string;
    createdAt: string;
    updatedAt: string;
    members: string[];
    __v: number;
  };
}) => {
  const [userData, setUserData] = useState<UserProp[]>([]);
  const [theme, setTheme] = useState<boolean>(false);
  const currentUser = useStateUseSelector((state: RootState) => state.user.user);
  const currentTheme = useStateUseSelector((state: RootState) => state.theme.currentTheme);

 

  const userId: string | undefined = chat?.members?.find((id) => id !== currentUser._id);
  const dispatch = useDispatch()
  useEffect(() => {
    if (currentTheme === 'dark') {
      setTheme(!theme);
    }
    const fetchData = async () => {
      try {
        const chatUser = await getChatuser(userId!);
        console.log(chatUser);
        const isUserExists = userData.some(user=>user._id === chatUser._id)
        console.log(isUserExists);
        
        if(!isUserExists){
          setUserData((prev) => [...prev, chatUser]);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [userId,]); 

console.log(userData);
const res = userData.filter((item, index, array) => {
  return array.findIndex((el) => el._id === item._id) === index;
});
// console.log(res);

  return (
    <>
      {res ? (
        res.map((user, index) => (
          <React.Fragment key={index}>
            <li onClick={()=>{dispatch(setSelectedUser(user))}} className="flex gap-3 cursor-pointer hover:bg-slate-300  p-5 rounded-lg">
              <div className="avatar">
                <div className={`w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 online`}></div>
              </div>
              <div className="flex flex-col justify-between">
                {theme ? (
                  <h3 className={`font-semibold text-white text-lg capitalize`}>{user?.name}</h3>
                ) : (
                  <h3 className={`font-semibold text-black text-lg capitalize`}>{user?.name}</h3>
                )}
                <p className="text-[#707991]">Online</p>
              </div>
            </li>
            <div className="divider my-0"></div>
          </React.Fragment>
        ))
      ) : (
        <div></div>
      )}
    </>
  );
};

export default ChatItem;

