import React from "react";
import ChatBot from "./components/ChatBot";
import Message from "./components/Message";
import { useState } from "react";
import ChatInput from "./components/ChatInput";
import axios from "axios";
import { motion } from "motion/react";
import Button from "./components/Button";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Github from "./components/Github";
// import Weatherbtn from './components/Weatherbtn'

const App = () => {
  const [message, setmessage] = useState([]);
  const [loading, setloading] = useState(false);
  const [active, setactive] = useState("chat"); // for buttons

  const sendMessage = async (userText) => {
    const newmessage = [
      ...message,
      { role: "user", text: userText, type: active },
    ];
    setmessage(newmessage);
    console.log("newmessage is : ", newmessage);
    setloading(true);
    let reply = "";

    if (active === "weather") {
      reply = await weather(userText);
      setmessage((prev) => [
        ...prev,
        {
          role: "model",
          text: reply,
          type: "weather",
        },
      ]);
    }
    else if (active=="github"){
      reply= await github(userText)
      setmessage((prev)=>[
        ...prev ,{
          role:"model",
          text:reply,
          type:"github"
        }
      ])}
    // else if(active ==="news"){
    //   reply = await news(userText);
    //   setmessage((prev) => [
    //     ...prev,
    //     {
    //       role: "model",
    //       text: reply,
    //       type: "news",
    //     },
    //   ])
    // }
    else if (active === "chat") {
      try {
        const response = await axios.post(
          "https://api.groq.com/openai/v1/chat/completions",
          {
            model: "llama-3.3-70b-versatile",
            messages: newmessage.map((msg) => ({
              role: msg.role === "model" ? "assistant" : msg.role,
              content:
  msg.type === "weather"
    ? typeof msg.text === "string"
      ? msg.text
      : `Weather in ${msg.text.city}: ${msg.text.desc}, ${msg.text.temp}K, humidity ${msg.text.humidity}%, wind ${msg.text.wind}`
    : msg.type === "github"
      ? typeof msg.text === "string"
        ? msg.text
        : msg.text.kind === "repo"
          ? `GitHub repo ${msg.text.owner}/${msg.text.name}: ${msg.text.description || "No description"}, ${msg.text.stars} stars, ${msg.text.forks} forks, written in ${msg.text.language}`
          : `GitHub user ${msg.text.username} (${msg.text.name || "no name set"}): ${msg.text.bio || "no bio"}, ${msg.text.followers} followers, ${msg.text.publicRepos} public repos`
      : msg.text,
})),
          },
          {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`,
              "Content-Type": "application/json",
            },
          },
        );
        const reply = response.data.choices[0].message.content;
        setmessage([
          ...newmessage,
          { role: "model", text: reply, type: "chat" },
        ]);
      } catch (error) {
        console.log("error generating response!!", error);
      } finally {
        setloading(false);
      }
    }
  };

  const weather = async (userText) => {
    const response = await axios.get(
      `https://api.openweathermap.org/geo/1.0/direct?q=${userText}&limit=5&appid=${import.meta.env.VITE_WEATHER_API_KEY}`,
    );
    const lat = response.data[0].lat;
    const lon = response.data[0].lon;
    const msg = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&unit=metric&appid=${import.meta.env.VITE_WEATHER_API_KEY}`,
    );
    const d = await msg.data;
    console.log("msg data ", msg.data);
    return {
      city: d.name,
      temp: d.main.temp,
      humidity: d.main.humidity,
      wind: d.wind.speed,
      desc: d.weather[0].description,
    };
  };

// {/*NEWS API*/}

// const news= async (userText)=>{
//   const newsmsg= await axios.get(`
//     https://newsapi.org/v2/everything?q=${userText}&from=2026-06-23&sortBy=publishedAt&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`)
//     console.log(newsmsg);
//     return {
//     name:newsmsg.data.articles[0].source.name,
//     dop:newsmsg.data.articles[0].publishedAt,
//     desc:newsmsg.data.articles[0].description,
//     content:newsmsg.data.articles[0].content
//   }  

// }

{/*GITHUB*/}

const github = async (userText) => {
  const trimmed = userText.trim();

  if (trimmed.includes("/")) {
    const [owner, repo] = trimmed.split("/");
    const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}`);
    return {
      kind: "repo",
      name: response.data.name,
      owner: response.data.owner.login,
      description: response.data.description,
      stars: response.data.stargazers_count,
      forks: response.data.forks_count,
      language: response.data.language,
      url: response.data.html_url,
    };
  } else {

    const response = await axios.get(`https://api.github.com/users/${trimmed}`);
    return {
      kind: "user",
      username: response.data.login,
      name: response.data.name,
      followers: response.data.followers,
      following: response.data.following,
      repos_url: response.data.repos_url,
      url: response.data.html_url,
    };
  }
  console.log("github msg : ",msg);
};

  return (
    <div className="bg-[#0f0f0f] h-full px-5 text-white">
      <ChatBot message={message} />
      {message.map((msg, index) => {
        {
          console.log("msg is : ", msg);
        }
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duraiton: 0.5 }}
          >
            <Message msg={msg} />
          </motion.div>
        );
      })}
      <Button activeMode={active} onModeChange={setactive} />
      <ChatInput onSend={sendMessage} loading={loading} />
      {/* <Home /> */}
      {/* <News /> */}
      {/* <Github /> */}
    </div>
  );
};

export default App;
