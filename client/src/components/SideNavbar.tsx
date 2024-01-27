"use client"
import React, { useEffect } from 'react'
import ChatList from './ChatList'
import { useAppDispatch, useStateUseSelector } from '@/lib/hooks';
import { RootState } from '@/lib/store';
import { setUserList, userListAsync } from '@/lib/features/userSlice';
import { useDispatch } from 'react-redux';


const SideNavbar = () => {
  
const currentTheme = useStateUseSelector((state: RootState) => state.theme.currentTheme);
const user = useStateUseSelector((state:RootState)=>state.user.user)

    return (
        <div className={`w-full md:!block sidebar z-10 border-r-2 border-slate-400 md:w-1/2 lg:w-1/3 p-3 ${currentTheme} h-screen overflow-scroll`}>
          {/* searchbar */}
          
          {/* chatlist */}
          {user && <ChatList  /> }
           {/* <ChatList users={users}/> */}
        </div>
      );
}

export default SideNavbar