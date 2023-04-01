import React from "react";
import { useState } from "react";
import styles from "./Login.module.css";

function Login (props){
    const [name, setName] = useState("");


    function handleChange(event){
        setName(event.target.value);
        console.log(event.target.value +"da li je to to?"); 
    }  
    
    
    function handleSubmit(event){
        event.preventDefault();
        
        if (name !== "") {
            props.enterChat(name);
        }
        setName("");
    };

    return(
        <div>
            <h1>
                Chat for Photography enthusiasts
            </h1>
            <form action="" onSubmit={handleSubmit} className="card">
                <label className="label-name" htmlFor="name">
                    Please enter your name:
                </label>
                <input className="input-name" type="text" value={name} onChange={handleChange} id="name" required/>
                <button className="LoginButton" type="submit">
                    Login
                </button>
            </form>
                
        </div>  
    );
};

export default  Login;  