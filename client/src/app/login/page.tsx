"use client"
import LoginForm from '@/components/LoginForm'
import { useStateUseSelector } from '@/lib/hooks';
import { RootState } from '@/lib/store';
import React from 'react'

const LoginPage = () => {
    const currentTheme = useStateUseSelector((state: RootState) => state.theme.currentTheme);
  return (
<div className={`${currentTheme} min-h-screen w-full flex justify-center items-center`}>
    <div className='card w-[90%] md:w-2/3 lg:w-2/5 bg-base-100 rounder-lg'>
      <div className='card-body'>
          <LoginForm/>
      </div>

    </div>
   </div>
  )
}

export default LoginPage