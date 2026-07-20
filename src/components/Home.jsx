import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Card from './Card'
import features from './data'
console.log(features)
const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <h1 className="text-center text-6xl font-bold my-6" >Features</h1>
      <div className="flex flex-wrap gap-5 justify-center">
      {features.map((feature,idx)=>{
        console.log("titles",feature.title)
        return <Card key={idx} title={feature.title} desc={feature.description} col= {feature.color} icon={feature.icon} />
      })}
      </div>
    </div>
  )
}

export default Home
