import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Input from './components/Input/Input';
import Login from './components/Login/Login';
import Messages from './components/Messages/Messages';



function App() {
  return (
    <div>
      <h1>React Chat app</h1>
      <Login />	
    </div>
  );
}

export default App;
