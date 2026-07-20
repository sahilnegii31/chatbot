import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Card from './Card'
import {features, steps} from './data'

console.log(features)
const Home = () => {
  return (
    <div className='h-full'>
      <Navbar />
      <Hero />
      <h1 className="text-center text-6xl font-bold my-6" >Features</h1>
      <div className="flex flex-wrap gap-5 justify-center">
      {features.map((feature,idx)=>{
        console.log("titles",feature.title)
        return <Card key={idx} title={feature.title} desc={feature.description} col= {feature.color} icon={feature.icon} />
      })}
      </div>
      <div className=' text-center my-12 h-full'>
        <h1 className='text-6xl font-bold my-6'>How It Works ? </h1>
        <div className="flex flex-col gap-5 w-full h-full">
        {steps.map((step,idx)=>{
          return( 
            <div className=' w-full h-fit border-1 flex flex-col justify-center gap-2 px-[30px] py-[30px] rounded-2xl'
              style={{
                  color: step.color
              }}>
                <div className='flex gap-5 flex-col items-center xl:flex-row justify-center'>
                <h1 className=' text-4xl font-bold'>{step.id}- {step.title}</h1>
                <p className=' text-2xl'>{step.desc}</p>
                </div>
            </div>
          )
        })}
        </div>
      </div>
      <div className='text-center my-12'>

        <h1 className='text-6xl font-bold my-6'>Tech Stack</h1>
      </div>
    </div>
  )
}

export default Home
