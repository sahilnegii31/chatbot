import React from 'react'
import ReactMarkDown from "react-markdown"
import remarkGfm from 'remark-gfm'
import Weatherbtn from './Weatherbtn'
const Message = ({role,text,type}) => {
    console.log(text)
    const isUser = role ==="user"

    if(type==="weather"){
        return <Weatherbtn data={text}/>
    }
  return (
    <>
    <div className={isUser ? ' flex items-end p-4 gap-2 flex-row-reverse':' flex items-end p-4 gap-2 justify-start' }>
        <div className={isUser ? "h-8 flex w-8 bg-[#1e1e1e] rounded-full justify-center" : "h-8 w-8 bg-purple-600 flex justify-center rounded-full"}>{isUser ? "👤" : "🤖"}</div>
        <div className={isUser ? "bg-purple-600 flex px-[20px] py-[20px] h-fit w-fit max-w-3xl  items-center rounded-xl  " :"  max-w-3xl  rounded-xl items-center bg-[#1e1e1e] px-[20px] py-[20px] h-fit flex w-fit" }>
            <div  className='prose prose-invert max-w-none break-words'>
            <ReactMarkDown 
            remarkPlugins={[remarkGfm]}
            >{text}</ReactMarkDown></div>
        </div>
    </div>
    </>
  )
}
export default Message
