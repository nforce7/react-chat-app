import React from "react";
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

export default  Login;  


