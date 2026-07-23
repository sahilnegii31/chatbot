import React from "react";
import ReactMarkDown from "react-markdown";
import remarkGfm from "remark-gfm";
import News from "./News";
import Github from "./Github";
// import Weatherbtn from "./Weatherbtn";
const Message = ({ msg }) => {
  console.log("msg is : ", msg);
  const role = msg.role;
  const isUser = msg.role === "user";

  {
    /* WEATHER */
  }

  if (msg.type === "weather") {
    if (role === "model") {
      return (
        <div className="flex mt-3 flex-col gap-5">
          <div className="border-1 rounded-3xl border-gray-500 w-fit h-fit flex flex-col gap-5 px-[30px] py-[20px] text-center">
            <h1 className="text-5xl font-bold">{msg.text.city}</h1>
            <h2 className="text-3xl-4xl text-gray-300">{msg.text.desc}</h2>
            <div className="text-start text-2xl">
              <h2>Humidity : {msg.text.humidity}</h2>
              <h2>Temperature : {msg.text.temp} (K) </h2>
              <h2>Wind : {msg.text.wind}</h2>
            </div>
          </div>
        </div>
      );
    }
  }

  {
    /* CHAT */
  }

  if (msg.type === "chat") {
    return (
      <>
        <div
          className={
            isUser
              ? " flex items-end p-4 gap-2 flex-row-reverse"
              : " flex items-end p-4 gap-2 justify-start"
          }
        >
          <div
            className={
              isUser
                ? "h-8 flex w-8 bg-[#1e1e1e] rounded-full justify-center"
                : "h-8 w-8 bg-purple-600 flex justify-center rounded-full"
            }
          >
            {isUser ? "👤" : "🤖"}
          </div>
          <div
            className={
              isUser
                ? "bg-purple-600 flex px-[20px] py-[20px] h-fit w-fit max-w-3xl  items-center rounded-xl  "
                : "  max-w-3xl  rounded-xl items-center bg-[#1e1e1e] px-[20px] py-[20px] h-fit flex w-fit"
            }
          >
            <div className="prose prose-invert max-w-none break-words">
              <ReactMarkDown remarkPlugins={[remarkGfm]}>
                {msg.text}
              </ReactMarkDown>
            </div>
          </div>
        </div>
      </>
    );
  }

  {
    /* NEWS */
  }

  //  if(msg.type === "news"){
  //   // return <News text={msg.text}/>
  //   if(msg.role==="model"){
  //   return (
  //     <div className=' mt-3 w-fit flex flex-col gap-5 h-fit border-1 border-gray-500 rounded-3xl px-[10px] py-[20px]'>
  //       <h1 className='text-4xl font-bold text-center underline'>{msg.text.name}</h1>
  //       <h2 className='text-xl'>Date of publication : {msg.text.dop}</h2>
  //       <p className='text-2xl'>{msg.text.desc}</p>
  //       <p className='text-2xl'>{msg.text.cont}</p>
  //     </div>
  //   )
  //  }}
  if (msg.type === "github") {
    // <Github msg={msg} />;
      if (msg.text.kind === "user") {
    return (
      <div className="w-full mt-3 h-fit py-[20px] flex justify-center flex-col items-center gap-4 border-2 border-gray-500 rounded-3xl text-center">
        <div className="border-2 border-gray rounded-full w-50 h-50">
          <img src={msg.text.url} alt="pfp"></img>
        </div>
        <div className="items-start">
          <h1 className="text-3xl">{msg.text.username} </h1>
          <p className="text-xl">Followers : {msg.text.followers} </p>
          <p className="text-xl">Following : {msg.text.following} </p>
          <a href={msg.text.repos_url} className="text-gray-300 underline text-xl">Repository link</a>
        </div>
      </div>
    );
  } else if(msg.text.kind === "repo") {
    <div className="w-full mt-3 h-fit flex justify-center flex-col items-center gap-6 border-2 border-gray-500 rounded-3xl text-center">
      <div className="items-start">
        <h1>{msg.text.name} </h1>
        <h1>{msg.text.owner}</h1>
        <p>{msg.text.description}</p>
        <p>{msg.text.starts}</p>
        <a href={msg.text.repos_url}>Repository link</a>
      </div>
    </div>;
  }
  }
};
export default Message;
