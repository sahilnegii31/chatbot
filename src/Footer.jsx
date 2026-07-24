import React from 'react'
// import { NavLink } from 'react-router-dom'
const footer = () => {
  return (
    <>
      <div className='text-center mt-5 border-elegance-accent border-t-1 border-gray-500 pt-5 flex gap-5 flex-wrap justify-evenly h-fit w-full'>
        <div className='w-40 sm:w-fit'>
          <h2 className='text-4xl font-bold text-[#8b7fd6]'>GroqAI</h2>
          <p className='text-gray-400  '>Smart tools. Real-time data. One powerful platform</p>          
        </div>
        <div className='w-40 sm:w-fit flex flex-col' id='contact'>
          <h2 className='text-4xl font-bold text-[#8b7fd6]'>Quick Links</h2>
          <a href="#home" className='text-gray-400  text-2xl' target='_blank'>Home</a>
          <a href="#features" className='text-gray-400  text-2xl' target='_blank'>Features</a>
        </div>
        <div className='w-40 sm:w-fit flex flex-col'>
          <h2 className='text-4xl font-bold text-[#8b7fd6]'>Social Links</h2>
          <a href="#home" className='text-gray-400  text-2xl' target='_blank'>GitHub</a>
          <a href="#features" className='text-gray-400  text-2xl' target='_blank'>LinkedIn</a>

        </div>
      </div>
      <div className='border-elegance-accent border-t-1 mt-5 md:mx-50'>
        <p className='text-[1.25rem] mt-5 text-center'>© 2026 GroqAI. All rights reserved. || Developed by Sahil.</p>
      </div>
    </>
  )
}

export default footer
