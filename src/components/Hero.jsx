import React from 'react'

const Hero = () => {
  return (
    <div className='py-[5rem] mt-[6rem] text-center bg-[#0a0a0a]'>
        <div className='flex flex-col gap-3 justify-center items-center'>
            <h2 className='text-6xl font-bold'>Groq AI</h2>
            <h3 className='text-2xl text-[#7c3aed]'>Chat, Search, Explore. All in One Place.</h3>
            <p className='text-xl text-[#888]'>Ask anything, get weather updates, explore GitHub 
              profiles and stay updated with latest news — 
              all powered by AI in one clean interface.
            </p>
            <button className='px-[30px] py-[10px] border-1 w-fit cursor-pointer hover:scale-110 transition-transform border-gray-500 rounded-xl'>Try Now</button>
            <p>⚡ Powered by Groq AI  •  🌤️ Live Weather  •  📰 Real-time News  •  🐙 GitHub Explorer</p>
        </div>
    </div>
  )
}

export default Hero
