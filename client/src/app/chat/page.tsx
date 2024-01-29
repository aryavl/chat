"use client"
import Messages from '@/components/Messages'
import SideNavbar from '@/components/SideNavbar'
import { useStateUseSelector } from '@/lib/hooks'
import { RootState } from '@/lib/store'
import { useRouter } from 'next/navigation'


const Chat = () => {
const router = useRouter()
const user = useStateUseSelector((state:RootState)=>state.user.user)
const selectedUser = useStateUseSelector((state:RootState)=>state.user.selectedUser)
console.log(user);

if(user.email === " "){
  router.push('/login')
}else{
  return (
    <div className=' min-h-screen'>
      <div className='mx-auto flex'>
        {/* sidebar */}
        <SideNavbar/>
        {/* messages */}
        {selectedUser.email !== "" ? <Messages/>:(<div className='flex justify-center items-center m-auto text-xl'>Start new Conversation...</div>)}
        {/* <Messages/> */}
      </div>
    </div>
  )
}
}

export default Chat