import React from 'react'
import ChatBot from './components/ChatBot'
import Message from './components/Message'
import { useState } from 'react'
import ChatInput from './components/ChatInput'
import axios from 'axios'
const App = () => {
    const [message, setmessage] = useState([])
    const [loading, setloading] = useState(false)
    
    const sendMessage= async (userText)=>{
      const newmessage = [...message , {role:"user", text: userText}]
      setmessage(newmessage)
      setloading(true)
    
    try {
      const response = await axios.post(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        model: "llama-3.3-70b-versatile",
        messages: newmessage.map(msg => ({
          role: msg.role === "model" ? "assistant" : msg.role,
          content: msg.text
        }))
      },
      {
        headers: {
          "Authorization": `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    )
      const reply= response.data.choices[0].message.content
      setmessage([...message, {role:"model",text : reply}])
    } catch (error) {
      console.log("error generating response!!",error)
      console.log(error.response.data);
    } finally{setloading(false)}
    console.log(message)
  }
    
    
    return (
    <div className='bg-[#0f0f0f] min-h-screen h-full px-20 text-white'>
      <ChatBot message={message} />
      <Message role={message.role} text={message.text} messages={message}/>
      <ChatInput onSend={sendMessage} loading={loading}/>
    </div>
  )
}

export default App
