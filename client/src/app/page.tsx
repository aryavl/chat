"use client";
import Navbar from "@/components/Navbar";
import { toggleTheme } from "@/lib/features/themeSlice";
import { useAppDispatch, useStateUseSelector } from "@/lib/hooks";
import { AppDispatch, RootState } from "@/lib/store";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const currentTheme = useStateUseSelector((state: RootState) => state.theme.currentTheme);
  const dispatch = useAppDispatch<AppDispatch>();
console.log(currentTheme);

  return (
    <>
    
        
      <div className={`${currentTheme} h-[100vh] flex items-center justify-center flex-col `}>
        <h1>Hello</h1>
        <p>Current theme: {currentTheme} </p>
        {currentTheme === "dark" ? (
          <>
          <button className="bg-white mt-4 rounded-full py-1 px-6 text-blue-950 font-semibold hover:scale-105" onClick={()=>dispatch(toggleTheme())}>Update theme color</button>
          <Link className="border border-white mt-4 rounded-full py-1 px-10 hover:scale-105" href='/login'>Login</Link>
          
          </>

        ):(
          <>
           <button className="bg-blue-950 mt-4 rounded-full py-1 px-6 text-white font-semibold hover:scale-105" onClick={()=>dispatch(toggleTheme())}>Update theme color</button>
        <Link className="border border-blue-950 mt-4 rounded-full py-1 px-10 hover:scale-105" href='/login'>Login</Link>
          </>

        )}
      </div>
    </>
  );
}
