import React from "react";
import { useState } from "react"; 
import styles from "./Input.module.css"; 


function Input(props) {
  const [inputText, setInputText] = useState("");

  function handleChange(event) {  
    setInputText(event.target.value); 
    
  }

  function handleSubmitMessage(event) { 
    event.preventDefault();

    
    if (inputText !== "") {
     props.onSendMessage(inputText)
    }
    setInputText(""); 
  };

  return (
    <div className={styles.InputField}>
      <form className={styles.InputForm}onSubmit={handleSubmitMessage}>
        
        <input 
          type="text"
          id="inputText"
          value={inputText}
          onChange={handleChange}
          placeholder="Enter your message"
          required
          className={styles.InputText}
          autoFocus = "true"
        />
        <button className={styles.InputButton} type="submit">Send</button>
      </form>
      
    </div>
  );
}

export default Input;

