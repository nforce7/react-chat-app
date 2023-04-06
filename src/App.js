import './App.css';
import React, {useState, useEffect} from 'react';
import Header from './components/Header/Header';
import Input from './components/Input/Input';
import Login from './components/Login/Login';
import Messages from './components/Messages/Messages';


function randomColor() {
  const colorValue = Math.floor(Math.random() * 16777215).toString(16);
  return `#${colorValue}`;
}


function randomNick() {
  const adjectives = [
    "Pioneer", "Visionary", "Prodigy", "Guru", "Crusader", "Oracle", "Legend", "Icon" 
  ];
  const nouns = [
    "Picture", "Graphic", "Photo", "Camera", "Snapshot", "Digital", "Visual","Imagery"
  ];
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  return noun + " " + adjective;
}




function App() { 

  const[chatState, setChatState] = useState({
    messages: [],
    member: {
      username:"",
      color: "",
      nickname: "",
    },
    });
    /* const[errorMsg, setErrorMsg] = useState(""); */

    const enterChat = (username, color, nickname) => {   

      
    if (username.trim() === "") {
      /* setErrorMsg("Username cannot be empty"); */
      alert("Username cannot be empty");
      return;
  }

      chatState.member = {  
        username: username ,
        color: randomColor(),
        nickname: randomNick(),
      };
      setChatState({ ...chatState }, chatState.member);  
    };
      //provjera 
      //setChatState({
        //...chatState,
        //member: {
         // username,
          // avatar: randomColor() ,
    
    
                  
    const [drone, setDrone] = useState(null);

    useEffect(() => {   
      if (chatState.member.username !== "") {
        const drone = new window.Scaledrone("WZIfcLaQjoRWkTQH", {
          data: chatState.member,
        });
        setDrone(drone);
      }
    }, [chatState.member]);

    if (drone) {
      
      drone.on("open", (error) => {  
        if (error) {    
          return console.error(error);
        }
        chatState.member.id = drone.clientId;  
        setChatState({  ...chatState}, chatState.member );   
  
        const room = drone.subscribe("observable-chatroom");

        room.on("message", (message) => { 
          const { member, data, id, timestamp } = message; 	
          chatState.messages.push({ member, data, id, timestamp }); 
          setChatState({ ...chatState}, chatState.messages ); 
        });
      });
    }

  const onSendMessage = (message) => { 
    drone.publish({
      room: "observable-chatroom",
      message,   
    });
  };


  return chatState.member.username === ""  ? ( 
    <Login enterChat={enterChat} />
    
    
  ) : ( 
    <div className="App-chat-page">
      <Header />
      <Messages 
          messages={chatState.messages}
          currentMember = {chatState.member } />
      <Input onSendMessage={onSendMessage} />
      
    </div>
  );
}

export default App; 
