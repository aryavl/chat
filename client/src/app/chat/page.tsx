"use client";
import Messages from "@/components/Messages";
import SideNavbar from "@/components/SideNavbar";
import { useStateUseSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";
import { useRouter } from "next/navigation";
import { SetStateAction, useEffect, useRef, useState } from "react";
import { Socket, io } from "socket.io-client";

const Chat = () => {
  const router = useRouter();
  const user = useStateUseSelector((state: RootState) => state.user.user) 
  const selectedUser = useStateUseSelector(
    (state: RootState) => state.user.selectedUser
  );
  const [onlineUsers,setOnlineUsers] = useState<string[]>([])
  console.log(user);
  const socket: React.MutableRefObject<
    Socket<Record<string, unknown>> | undefined
  > = useRef();

  useEffect(() => {
    if(user.email!== " " ){
      socket.current = io("http://localhost:8800");
      socket.current.emit("new-user-add", user._id);
      socket.current.on("get-users",(users: SetStateAction<string[]>)=>{
        setOnlineUsers(users)
      })
    }
    
  }, [user]);
  if (user.email === " ") {
    router.push("/login");
  } else {
    return (
      <div className=" min-h-screen">
        <div className="mx-auto flex">
          {/* sidebar */}
          <SideNavbar />
          {/* messages */}
          {selectedUser.email !== "" ? (
            <Messages />
          ) : (
            <div className="flex justify-center items-center m-auto text-xl">
              Start new Conversation...
            </div>
          )}
          
        </div>
      </div>
    );
  }
};

export default Chat;
