import React ,{useState} from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const [active, setactive] = useState("home")
  
  return (
    <div className='flex justify-between w-full h-16 border-b-1 border-gray-500 px-5 bg-[rgba(0,0,0,0.7)] fixed top-0 items-center text-2xl'>
      <div className='w-full/50 text-3xl font-bold'>GroqAI</div>
      <div className='w-full/50'>
        <ul className='flex gap-5 '>
            <NavLink to="/" className={`cursor-pointer transition-colors ${active === "home" ? " text-purple-600" : ""}`}  onClick={() => setactive("home")}>Home</NavLink>
            <NavLink to="/chat" className={`cursor-pointer transition-colors ${active === "chat" ? " text-purple-600" : ""}`}  onClick={() => setactive("chat")}>Chat</NavLink>
            <NavLink  className={`cursor-pointer transition-colors ${active === "about" ? " text-purple-600" : ""}`}  onClick={() => setactive("about")}>About</NavLink>
            <NavLink  className={`cursor-pointer transition-colors ${active === "contact" ? " text-purple-600" : ""}`}  onClick={() => setactive("contact")}>Contact</NavLink>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
