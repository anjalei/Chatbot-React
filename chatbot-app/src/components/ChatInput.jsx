import { useState } from 'react'
import loadingSpinnerImage from '../assets/spinner.jpg'
import { Chatbot } from 'supersimpledev'
import './ChatInput.css';

export function ChatInput({chatMessages,setChatMessages}){
       const[inputText,setInputText] = useState('')

        function saveInputText(event){
             setInputText(event.target.value);
        }

      async  function sendMessage(){ 

         setInputText("");

          const newChatMessages=[
                ...chatMessages,
                {
                  message: inputText,
                  sender: "user",
                  id: crypto.randomUUID()
                }];

                 setChatMessages([
            ...newChatMessages,
            {
              message: <img src={loadingSpinnerImage} className="loading-spinner" />, 
              sender: 'robot',
              id: crypto.randomUUID()
            }
          ]);

          const response= await Chatbot.getResponseAsync(inputText);
           setChatMessages([
            ...newChatMessages,
          {
                  message: response,
                  sender: "robot",
                  id: crypto.randomUUID()
                }
              ])
              }

              function handleKeyDown(event){
                if(event.key==='Enter'){
                  sendMessage();
                }else if (event.key==='Escape'){
                  setInputText('');
                }
              
              }
              
        return (
          <div className="chat-input-container">
            <input 
            className="chat-input"
            placeholder='Send a message to Chatbox' 
            size='30'
            onChange={saveInputText}
            onKeyDown ={handleKeyDown}
            value={inputText}
            />
              <button
               onClick={sendMessage}
               className="send-Button"
               >
               Send
               </button>
         </div>
        )
      }