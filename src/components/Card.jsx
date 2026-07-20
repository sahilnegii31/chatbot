import React from 'react'

const Card = (feature) => {
  return (
    <div className=' w-[25rem] h-fit min-h-[15rem] border-1 flex flex-col gap-2 transition-all px-[30px] py-[30px] rounded-2xl glow cursor-pointer'
    style={{
        color: feature.col
    }}>
      <h1 className='text-4xl font-bold'>{feature.title}</h1>
      <p className='text-xl'>{feature.desc}</p>
    </div>
  )
}

export default Card
