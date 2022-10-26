import { useState } from "react";

type Tmessage={
    message:string,
    id:string,
    from:string
}

export const HelpWidget = ()=>{

    const [isChatDisplayed, setIsChatDisplayed] = useState(false)
const [fromId, setFromId] = useState("0") // zero : customer


    const [messages, setMessages] = useState<Tmessage[]>([
        {message:'Merhaba, sorunuzu sorun',id:'gjfsldkjs9943',from:'1'},
        {message:'Sorum şudur ki...',id:'lakjf839j3983',from:'0'},
    ])

    return isChatDisplayed ? ( 

    <div className="
    flex flex-col justify-between
     fixed bottom-10 right-10 h-96 w-80 bg-white p-8">
        <button onClick={()=> setIsChatDisplayed(false)}
        className="absolute right-5 top-5 hover:text-red-500"
        >X</button>

        <ul>
            {//messages.map((message)=>(<li key={message.id}>{message.message}</li>))
            messages.map(({message,id,from}) => (
            <li className={`mb-2 p-1 ${from === fromId ? "bg-gray-50" : "bg-blue-200"}`} key={id}>{message}</li>
            ))}
        </ul>

        <form className="flex">
            <input className="border w-full border-gray-700 p-1 px-3" />
            <button className="bg-blue-500 text-white p-2 px-4 hover:bg-blue-600">Gönder</button>
        </form>
        </div> 
        
        )
        : (
    <button
        onClick={()=> setIsChatDisplayed(true)}
        className="fixed bottom-10 right-10 bg-blue-500 text-white p-2 px-4
    hover:bg-blue-600">
Yardım İçin Tıklayın
    </button>)
    ;
}