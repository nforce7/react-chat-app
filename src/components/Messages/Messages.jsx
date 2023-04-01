import styles from './Messages.module.css';

const Messages = (props) => {
    console.log(props.currentMember);
    const renderMessage = (message) => {
        const { member, data, id, timestamp } = message;
        const messageFromMe = member.id === props.currentMember.id; // true or false
        const className = messageFromMe ?
            "messages-message currentMember" : "messages-message";

        function setTimestamp(timestamp) {
            const time = new Date(timestamp*1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            return time;
        }
    

    return (
        <li className={className} key={id}>

            {/* username and avatar */}
            <div className="info-content">
            <span className="userName">{member.clientData.username}  </span>
            <span className="avatar" style={{backgroundColor:member.clientData.color}}/>
            </div>

                
            
               {/*  text */}
            <div className="message-content">
                <p className="text">{data}</p>
                <span className="timestamp">{setTimestamp(timestamp)}</span>

            </div>
        </li>
            );
    }


    return (
        <div className="messages-field">
            <ul className="messages-list">

                {props.messages.map((item) => renderMessage(item))}
            </ul>
            {
                props.messages.length === 0 && (
                    <div className="no-messages">
                        <p>There are no messages yet</p>
                    </div>
                )
            }
          

           {/*  <ul className="messages-list">
                {props.messages.map((item) => renderMessage(item))}
            </ul> */}
        </div>
    )

};


export default Messages;
