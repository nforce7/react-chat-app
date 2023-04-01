import './App.css';
import React, {useState, useEffect} from 'react';
import Header from './components/Header/Header';
import Input from './components/Input/Input';
import Login from './components/Login/Login';
import Messages from './components/Messages/Messages';

function randomColor() {
  return '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
}


function App() {

  const[chatState, setChatState] = useState({
    messages: [],
    member: {
      username:"",
      avatar: "",
    },
    });

    const enterChat = (username) => {
      setChatState({
        ...chatState,
        member: {
          username,
          avatar: randomColor(),
        },
      });
    };

    //write code for the app to connect to Scaledrone and subscribe to the room here                      
    const [drone, setDrone] = useState(null);
    useEffect(() => {
      if (chatState.member.username !== "") {
        const drone = new window.Scaledrone("TTAB80ZRqzFy41Il", {
          data: chatState.member,
        });
        setDrone(drone);
      }
    }, [chatState.member]);

    if (drone) {
      //connection has been established
      drone.on("open", (error) => {
        if (error) {
          return console.error(error);
        }
        chatState.member.id = drone.clientId;
        setChatState({  ...chatState, member: chatState.member });

        const room = drone.subscribe("observable-chatroom");
        room.on("message", (message) => {
          const { member, data, id, timestamp } = message;
          chatState.messages.push({ member, data, id, timestamp });
          setChatState({ ...chatState, messages: chatState.messages });
        });
      });
    }

  const sendMessage = (message) => {
    drone.publish({
      room: "observable-chatroom",
      message,
    });
  };

 






  return chatState.member.username === "" ? (
    <Login enterChat={enterChat} />
  ) : (
    <div className="App-chat-page">
      <Header />
      <Messages 
          messages={chatState.messages}
          currentMember = {chatState.member } />
      <Input sendMessage={sendMessage} />
    </div>
  );
}

export default App;
