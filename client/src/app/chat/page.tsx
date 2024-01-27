import Messages from '@/components/Messages'
import SideNavbar from '@/components/SideNavbar'
import React from 'react'

const Chat = () => {
  return (
    <div className=' min-h-screen'>
      <div className='mx-auto flex'>
        {/* sidebar */}
        <SideNavbar/>
        {/* messages */}
        <Messages/>
      </div>
    </div>
  )
}

export default Chat