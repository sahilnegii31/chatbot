import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Card from "./Card";
import Footer from "../Footer";
import { features, steps, frontend , deployment, development , Apis } from "./data";

const Home = () => {
  return (
    <div className="h-full">
      <Navbar />
      <Hero />
      <h1 className="span text-center text-6xl font-bold my-6">Features</h1>
      <div className=" flex flex-wrap gap-5 justify-center">
        {features.map((feature, idx) => {
          return (
            <Card
              key={idx}
              title={feature.title}
              desc={feature.description}
              col={feature.color}
              icon={feature.icon}
            />
          );
        })}
      </div>
      <div className=" text-center my-12 h-full flex flex-col gap-6">
        <h1 className="span text-6xl font-bold">How It Works ? </h1>
        <div className="flex items-center flex-col gap-5 w-full h-full">
          {steps.map((step, idx) => {
            return (
              <div key={idx}
                className=" w-fit h-fit border-1 gap-2 px-[10px] py-[30px] rounded-2xl"
                style={{
                  color: step.color,
                }}
              >
                <div className="flex gap-5 flex-col items-center xl:flex-row justify-center">
                  <h1 className=" text-3xl font-bold">
                    {step.id}- {step.title}
                  </h1>
                  <p className=" text-xl">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="my-12 flex flex-col gap-6 justify-center px-[50px]">
        <h1 className="span text-6xl text-center font-bold my-6">Tech Stack</h1>
        <div className="flex flex-col gap-5 md:flex-row">
          {frontend.map((frontend, idx) => {
            return (
              <div key={idx}
                className=" w-fit h-fit min-h-[12rem] border-1 flex flex-col gap-2 transition-all px-[30px] py-[30px] rounded-2xl glow cursor-pointer text-[#7c3aed]">
                <h1 className="text-3xl font-bold">{frontend.title}</h1>
                <p className="text-xl">{frontend.desc}</p>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col flex-wrap gap-5 md:flex-row">
          {Apis.map((Apis, idx) => {
            return (
              <div key={idx}
                className=" w-[18rem] h-fit min-h-[13rem] border-1 flex flex-col gap-2 transition-all px-[30px] py-[30px] rounded-2xl glow cursor-pointer text-[#0ea5e9]">
                <h1 className="text-3xl font-bold">{Apis.title}</h1>
                <p className="text-xl">{Apis.desc}</p>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col gap-5 md:flex-row">
          {development.map((development, idx) => {
            return (
              <div key={idx}
                className=" w-fit h-fit min-h-[10rem] border-1 flex flex-col gap-2 transition-all px-[30px] py-[30px] rounded-2xl glow cursor-pointer text-[#6b7280]">
                <h1 className="text-3xl font-bold">{development.title}</h1>
                <p className="text-xl">{development.desc}</p>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col gap-5 md:flex-row">
          {deployment.map((deployment, idx) => {
            return (
              <div key={idx}
                className=" w-fit h-fit border-1 flex flex-col gap-2 transition-all px-[30px] py-[30px] rounded-2xl glow cursor-pointer text-[#10b981]">
                <h1 className="text-4xl font-bold">{deployment.title}</h1>
                <p className="text-xl">{deployment.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
