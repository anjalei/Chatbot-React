 import RobotProfileImage from '../assets/robot.png' //default import
import userProfileImage from '../assets/user.jpg'
import './ChatMessage.css'
import dayjs from 'dayjs';

 export function ChatMessage ({message,sender,time}){
        return (
          <div className={sender==='user'?'chat-message-user':'chat-message-robot'}>
            {sender==='robot'&&(
              <img src ={RobotProfileImage} className="chat-message-profile"/>
            )}
            <div 
            className="chat-message-text"
            >
            {message}
            {time && (
          <div className='chat-message-time'>
            {dayjs(time).format('h:mma')}
          </div>
        )}
            </div>
            {sender==="user"&&(
            <img src ={userProfileImage} className="chat-message-profile-user"/>
            )}
            
          </div>
        )
      }