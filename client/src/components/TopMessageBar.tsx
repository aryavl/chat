"use client"
import { useStateUseSelector } from '@/lib/hooks'
import { RootState } from '@/lib/store'
import React, { useEffect, useState } from 'react'

const TopMessageBar = () => {
    const [isSelected,setIsSelected] = useState<boolean>(false)
    const selectedUser = useStateUseSelector((state:RootState)=>state.user.selectedUser)
    console.log(selectedUser);
    
    useEffect(()=>{
        if(selectedUser.email !== ""){
            setIsSelected(true)
        }
    },[selectedUser]) 
    console.log(isSelected);
    
  return (
    <>
    {isSelected ? (
         <div className={`bg-white ${selectedUser ? " " : "md:hidden"}`}>
         <div className="w-full px-10 py-3 flex justify-between items-center">
           <div className="flex gap-3">
             
             <div className="avatar ml-3 cursor-auto">
               <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
     
               </div>
             </div>
             <div className="flex flex-col justify-between">
               <h3 className="font-semibold capitalize text-black text-md">
                 {selectedUser?.name}
               </h3>
               <p className="text-[#707991]">online</p>
             </div>
           </div>
           <div className="divider my-0"></div>

           {/* Call button */}
           
         </div>
       </div>
    ):(<div></div>)}
    </>
   
  )
}

export default TopMessageBar