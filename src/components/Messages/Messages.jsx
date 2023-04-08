import React from 'react';
import styles from './Messages.module.css'; 

const Messages = (props) => {
    console.log(props.currentMember);  
   
    const renderMessage = (message) => { 
        const { member, data, id, timestamp } = message;
        const messageFromMe = member.id === props.currentMember.id; // true or false
        const className = messageFromMe 
            ? styles.MessagesMessageCurrentMember : styles.MessagesMessage;

        function setTimestamp(timestamp) {
            const time = new Date(timestamp*1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            return time;  
        }
    
    return (
        <li className={className} key={id}> 

            {/* Username and UserColor here */}
            <div className={styles.UsernameAndUserColor}>
            <span className={styles.UserName}> {member.clientData.username} ({member.clientData.nickname})   </span>
            <span className={styles.UserColor} style={{backgroundColor:member.clientData.color}}/>
            </div> 

             {/* Message Text here */}
            <div className={styles.MessageContent}>
                <p className={styles.MessageText}>{data}</p>
                <span className={styles.Timestamp}>{setTimestamp(timestamp)}</span>
            </div>
        </li>
            );
    };

    return (
        <div className={styles.MessagesArea}>
            <ul className={styles.MessagesList}>
                {props.messages.map((item) => renderMessage(item))}
            </ul>
             {
                props.messages.length === 0 && ( 
                    <div className={styles.NoMessages}>
                        <p>There are no messages yet</p>
                    </div>
                )
            } 
        </div>
    )
};

export default Messages;




