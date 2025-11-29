import { useState, useEffect } from 'react'
import { Chatbot } from 'supersimpledev'
import { ChatInput } from './components/ChatInput'
import { ChatMessages } from './components/ChatMessages'


import './App.css'


function App(){
             
       const [chatMessages,setChatMessages]=
        useState(JSON.parse(localStorage.getItem('messages'))|| [] );
       useEffect(()=>{
        Chatbot.addResponses({
          'goodbye':'Good Bye, Have a great day!',
          'Good morning':'Good morning! Did you sleep well?',
          'How are you?':'I’m just a bot, but I’m feeling great! How about you?',
          'Who are you?':'I’m a simple React chatbot',
          'good night':'Good Night, Sleep well!'
        
        })
       },[]);
       useEffect(()=>{
         localStorage.setItem('messages',JSON.stringify(chatMessages))
       },[chatMessages])
        return (
          <div className="app-container">
         {chatMessages.length===0&&(
          <p className="welcome"
          >
          Welcome to chatbot ! Send a message using the textbox below
          </p>
         )}
          <ChatMessages
          chatMessages={chatMessages}
          />
          <ChatInput
          chatMessages={chatMessages}
          setChatMessages={setChatMessages}
          />
          </div>
        )
      }
export default App
