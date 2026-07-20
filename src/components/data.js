import { m } from "framer-motion"
import { desc } from "motion/react-client"

const features = [
  {
    id: 1,
    icon: "🤖",
    title: "AI Chat",
    description: "Ask anything — coding, general knowledge, creative writing. Powered by Groq's lightning fast LLaMA model.",
    color: "#7c3aed"
  },
  {
    id: 2,
    icon: "🌤️",
    title: "Live Weather",
    description: "Real-time weather updates for any city worldwide. Temperature, humidity, wind speed — all instantly.",
    color: "#0ea5e9"
  },
  {
    id: 3,
    icon: "🐙",
    title: "GitHub Explorer",
    description: "Search any GitHub profile — view repos, followers, and developer stats in seconds.",
    color: "#6b7280"
  },
  {
    id: 4,
    icon: "📰",
    title: "Latest News",
    description: "Stay updated with real-time news headlines from around the world, powered by NewsAPI.",
    color: "#10b981"
  }
]

const steps=[{
  id: "01",
  title: "Choose a Feature",
  desc: "Explore AI-Powered tools like Chat, Weather, News and GitHub Explorer",
  color: "#7c3aed"
},
{
  id:"02",
  title: "Enter Your Request",
  desc: "Ask a question, search for a GitHub profile, enter a city, or browse the latest headlines.",
  color: "#0ea5e9"
},
{
  id:"03",
  title:"We Fetch the Data",
  desc: "Groq AI, Weather APIs, GitHub API and News API process your request and retrieve the relevant information.",
  color: "#6b7280"
},
{
  id:"04",
  title: "Get Instant Results",
  desc: "Receive fast, accurate and easy to understand result- all in one place.",
  color: "#10b981"
}
]
const frontend=[{
  id:1,
  title: " ReactJs",  
  img:"https://imgs.search.brave.com/R-ImMexXTbXfsJMqZwrF9jTlBKwIT02OdYAGj0vbv50/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9icmFu/ZHNsb2dvcy5jb20v/d3AtY29udGVudC91/cGxvYWRzL2ltYWdl/cy9yZWFjdC1sb2dv/LTEucG5n",
  desc:"Building the component-based user interface"
},
{
  id:2,
  title: "TailwindCss",
  img:"https://imgs.search.brave.com/puzwaJgD3I0B5htGDEvbUC5NUIKFFoQXpmOHTQqP2gM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzQzLzIvdGFpbHdp/bmQtY3NzLWxvZ28t/cG5nX3NlZWtsb2dv/LTQzNDA5MC5wbmc",
  desc:"Responsive styling and dar-themed UI"
},
{
  id:3,
  title : 'JavaScript (ES6+)',
  img:"https://imgs.search.brave.com/M-2wPGQ-o5MMdejSKyWrT106YmVH9sYkv0LjCQYwUPM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/c2h1dHRlcnN0b2Nr/LmNvbS9pbWFnZS12/ZWN0b3Ivd2ViLWRl/dmVsb3BtZW50LXNp/Z24tamF2YXNjcmlw/dC12ZWN0b3ItMjYw/bnctMTg3NTkzNDY1/NC5qcGc",
  desc:" Application logic and interactivity "
},
]

const Apis=[{
  id:1,
  title:"Axious",
  desc:"Making HTTP requests to external APIs"
},
{
  id:2,
  title:"Groq API",
  desc:"AI-Powered chatbot responses"
},
{
  id:3,
  title:"Github API",
  desc:"Fetch Github user/respository Data"
},
{
  id:4,
  title: "Weather API",
  desc:"Fetching real-time weather information"
},
{
  id:5,
  title:"News API",
  desc:"Fetching latest news articles"
}
]

const development=[
  {
    id:1,
    title:"Vite",
    desc:"Fast development environment and build tool"
  },
  {
    id:2,
    title:"Git & GitHub",
    desc:"Version control and source-code managment"
  }
]

const deployment=[
  {
    id:1,
    title:"Netlify",
    desc:"Hosting and deployment"
  }
]

export { features , steps, frontend, development, deployment, Apis }