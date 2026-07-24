import React, { useState } from 'react'
import { FaPaperPlane } from 'react-icons/fa'
import { IoSend } from 'react-icons/io5'
import { RiSendPlaneFill } from 'react-icons/ri'

const ChatInput = ({onSend, loading}) => {
    const [input, setinput] = useState("")
     
    const handleSend=()=>{
        if(input.trim()==="") return
        onSend(input) // app.jsx ko input bheja
        setinput("") // input field ko empty kr do 
    }

  return (
    <div className= 'flex items-center fixed bottom-0 bg-black w-full'>
      
        <input type='text'
        value={input}
        onChange={(e)=>{setinput(e.target.value)}}
        onKeyDown={(e)=>e.key === 'Enter' && handleSend()}
        placeholder='Type a message...'
        className='w-full h-fit px-[20px] py-[20px] bg-gray-500/20 text-white m-4 rounded-2xl'
        />
        <button onClick={handleSend} 
        disabled={loading}
        className={`rounded-full px-[30px] py-[20px] text-white ${loading ? "opacity-50 cursor-not-allowed" :""} `}>
          <FaPaperPlane />  
        </button>   {/* jb api call ho rahi hai tb disable hoga */}
    </div>
  )
}

export default ChatInput
