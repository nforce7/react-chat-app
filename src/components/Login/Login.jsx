import React from "react";
import { useState } from "react";
import styles from "./Login.module.css";

function Login (props){
    const [name, setName] = useState("");


    function handleChange(event){
        setName(event.target.value);
        console.log(event.target.value); 
    }  
    
    
    function handleSubmit(event){
        event.preventDefault();
        if (name !== ""){
            props.onLogin(name);
        }
        setName("");
    };

    return(
        <div>
            <h1>
                Chat for Photography enthusiasts
            </h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Please enter your name:
                </label>
                <input type="text" value={name} onChange={handleChange} required/>
                <button type="submit">
                    Login
                </button>
            </form>
                
        </div>  
    );
};

export default  Login;  