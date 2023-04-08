import React from "react";
import styles from './Header.module.css';
import CameraLogo from "../../images/CameraLogo.png"

function Header() {

  return (
    <div className={styles.header}>
      <h1 className={styles.HeaderH1}>Photo Chat</h1>
      <p className={styles.ChatDescription}>Everything photography related</p> 
      <img src={CameraLogo} alt="camera-logo" className={styles.CameraLogo} />             
    </div>
  );
} 

export default Header;  




