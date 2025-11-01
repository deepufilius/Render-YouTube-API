import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../../utils/chatSlice";
import { generateName } from "../../utils/randomData";


const LiveChat = () => {

  const [liveMessage,setLiveMessage] = useState("");
  const allChat = useSelector(store=>store.chat.messages);
  const dispatch = useDispatch();

  const handleLiveChat = ()=>{
    dispatch(addMessage({
      name: "Deepu Filius",
      message: liveMessage
    }))
    setLiveMessage("");
  }

  useEffect(()=>{
      const Id = setInterval(()=>{
        console.log("API Polling")

        dispatch(addMessage({
          name: generateName(),
          message: "Live Comment"
        }))
      },2000)

      return ()=> clearInterval(Id);
  },[])

  return (
    <form className="flex flex-col w-full border border-black rounded-lg overflow-hidden h-[400px] ml-2 px-2" onSubmit={(e)=>e.preventDefault()}>
      <div className="h-11/12 overflow-y-scroll flex flex-col-reverse">
          {
            allChat.map((chat,index)=>(
                <ChatMessage key={index} name={chat.name} message={chat.message}/>
            ))
          }
      </div>
      <div className=" mt-1 py-2 flex space-x-1">
        <input type="text" className="w-full border border-gray-400 p-1 rounded-lg" placeholder="Add your message..." value={liveMessage} onChange={(e)=>setLiveMessage(e.target.value)}/>
        <button className="bg-blue-600 rounded-lg py-1 px-3 text-white font-bold" onClick={handleLiveChat}>Send</button>
      </div>
    </form>
  )
}

export default LiveChat