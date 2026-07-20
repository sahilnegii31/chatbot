import React from 'react'
import ChatBot from './components/ChatBot'
import Message from './components/Message'
import { useState } from 'react'
import ChatInput from './components/ChatInput'
import axios from 'axios'
import { motion } from "motion/react"
import Button from './components/Button'
import Home from './components/Home'
import Navbar from './components/Navbar'

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
      setmessage([...newmessage, {role:"model",text : reply}])
    } catch (error) {
      console.log("error generating response!!",error)
    } finally{setloading(false)}
  }


  const weather= async (userText)=>{
    try {
      const response = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${userText}&limit=5&appid=${VITE_WEATHER_API_KEY}`)
      console.log(response);
      
    } catch (error) {
      console.log("error retreving data from api ",error);
    }

  }



  const [active, setactive] = useState("Chat")  // for buttons
    
    return (
    <div className='bg-[#0f0f0f] h-full px-5 text-white'>
      {/* <ChatBot message={message} />
      {message.map((msg,index)=>{
        return <motion.div key={index}
        initial={{opacity: 0, y:20 }}
        animate={{opacity: 1 , y:0}}
        transition={{duraiton:0.5}} >
          <Message key={index} role={msg.role} text={msg.text}/>
          </motion.div>
      })}
      <Button activeMode={active} onModeChange={setactive}/>
      <ChatInput onSend={sendMessage} loading={loading}/> */}
      <Home />
    </div>
  )
}

export default App
