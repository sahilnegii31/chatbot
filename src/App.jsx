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
import Weatherbtn from './components/Weatherbtn'

const App = () => {
    const [message, setmessage] = useState([])
    const [loading, setloading] = useState(false)
    
    const sendMessage= async (userText)=>{
      const newmessage = [...message , {role:"user", text: userText}]
      setmessage(newmessage)
      setloading(true)
      let reply = ""

      if(active=="weather"){
        reply=await weather(userText)
        setmessage(prev=>[...prev,{
          role:"model",
          text:reply,
          type:"weather"
        }])
      }
      // else if (activeMode=="github"){
      //   reply= await github(usertext)
      // }
      // else if(activeMode=="news"){
      //   reply = await News(userText)
      // }
      else {
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
}


  const weather= async (userText)=>{

      const response = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${userText}&limit=5&appid=${import.meta.env.VITE_WEATHER_API_KEY}`)
      console.log(response);
      const lat= response.data[0].lat
      const lon=response.data[0].lon
      // console.log(innerResponse);
      // const d = await msg.data
      // return {
        //   city:d.name,
        //   temp:d.main.temp,
        //   humidity:d.main.humidity,
        //   wind:d.wind.speed,
        //   desc:d.weather[0].description
        // }
      try {
        const msg = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_WEATHER_API_KEY}`)
        
      } catch (error) {
        console.log("error in inner api",error)
        
      }
  }



  const [active, setactive] = useState("Chat")  // for buttons
    
    return (
    <div className='bg-[#0f0f0f] h-full px-5 text-white'>
      <ChatBot message={message} />
      {message.map((msg,index)=>{
        return <motion.div key={index}
        initial={{opacity: 0, y:20 }}
        animate={{opacity: 1 , y:0}}
        transition={{duraiton:0.5}} >
          <Message key={index} role={msg.role} text={msg.text}/>
          </motion.div>
      })}
      <Button activeMode={active} onModeChange={setactive}/>
      <ChatInput onSend={sendMessage} loading={loading}/>
      {/* <Home /> */}
      <Weatherbtn onGetweather={weather}/>
    </div>
  )
}

export default App
