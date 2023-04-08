/* import React from "react";
import { useState } from "react";
import styles from "./Login.module.css"; 

function Login (props){
    const [name, setName] = useState(""); 

    
    function handleChange(event){  
        setName(event.target.value);
        console.log(event.target.value +"je unešeni username");  
    }  
    
    
    function handleSubmit(event){  
        event.preventDefault(); 
        
        if (name !== "") {
            props.enterChat(name);
        }
        setName("");
    };

    return(
        <div className={styles.LoginPage} style={props.style}>
            <h1 className={styles.H1LoginPage}>
                Chat for Photography enthusiasts
            </h1>
            <form action="" onSubmit={handleSubmit} className={styles.FormBackground}>
                <label className={styles.LabelTag} htmlFor="name">
                    Please enter your name:
                </label>
                <input className={styles.InputText} type="text" value={name} onChange={handleChange} id="name" required/> 
                <button className={styles.LoginButton} type="submit">
                    Login
                </button>
            </form> 
                
        </div>  
    );
};

export default  Login;   */



import React, { useState } from "react";
import styles from "./Login.module.css";
import CameraLogoLoginWhite from "../../images/CameraLogoLoginWhite.png"

function Login(props) {
  const [name, setName] = useState("");
  const [showError, setShowError] = useState(false);

  function handleChange(event) {
    setName(event.target.value);
    setShowError(false);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (name.trim().length === 0) {
      setShowError(true);
      return;
    }

    props.enterChat(name);
    setName("");
    
  }

  function handleClick() {
    if (name.trim().length === 0) {
      setShowError(true);
      return;
    }
    setShowError(false); 
    
  }

  return (
    <div className={styles.LoginPage} style={props.style}>
      <h1 className={styles.H1LoginPage}>
        Chat for Photography enthusiasts
      </h1>
      <form onSubmit={handleSubmit} className={styles.FormBackground}>
        <label className={styles.LabelTag} htmlFor="name">
          Please enter your name:
        </label>
        <input
          className={styles.InputText}
          type="text"
          value={name}
          onChange={handleChange}
          id="name"
          autoComplete="off"
          autoFocus={true}
        />
        {showError ? (
          <p className={styles.ErrorMessage}>Username cannot be empty</p>
        ) : (
          <p className={styles.ErrorMessage}>&nbsp;</p>
        )}
        <button onClick={handleClick} className={styles.LoginButton} type="submit">
          Login
        </button>
      </form>
      <img src={CameraLogoLoginWhite} alt="camera-logo-login" className={styles.CameraLogoLoginWhite} />  
    </div>
  );
}

export default Login;













