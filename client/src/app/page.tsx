"use client";
import Navbar from "@/components/Navbar";
import { toggleTheme } from "@/lib/features/themeSlice";
import { useAppDispatch, useStateUseSelector } from "@/lib/hooks";
import { AppDispatch, RootState } from "@/lib/store";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  const currentTheme = useStateUseSelector((state: RootState) => state.theme.currentTheme);
  const dispatch = useAppDispatch<AppDispatch>();

  return (
    <>
    
        
      <div className={currentTheme}>
        <h1>Hello</h1>
        <p>Current theme: {currentTheme} </p>
        <button onClick={()=>dispatch(toggleTheme())}>Update theme color</button>
      </div>
    </>
  );
}
