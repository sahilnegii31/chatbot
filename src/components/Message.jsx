import React from 'react'

const Message = (messages) => {
    console.log(messages)
    const isUser = messages.role ==="user"
  return (
    <>
    <div className={isUser ? ' flex items-center p-3 gap-2 flex-row-reverse':' flex items-center p-3 gap-2 justify-start' }>
        {messages.map((msg)=>(
            <>
                <div className={isUser ? "h-8 flex w-8 bg-[#1e1e1e] rounded-full justify-center" : "h-8 w-8 bg-purple-600 flex justify-center rounded-full"}>{isUser ? "👤" : "🤖"}</div>
                <div className={isUser ? "bg-purple-600 flex px-[10px] py-[10px] h-fit w-fit items-center rounded-xl  " :" rounded-xl items-center bg-[#1e1e1e] px-[10px] py-[10px] h-fit flex w-fit" }>
                    <p className='text-white text-sm'>{msg.text}</p>
                </div>
            </>

        ))}
    </div>
    </>
  )
}
export default Message
