import React from 'react'
import styles from "./index.module.css"

import downArrow from "../../assets/icons/downarrow.png"

interface IProps{
  label: string,
  styleProps?: object,
  labelStyle?: object
}

const DropDownList: React.FC<IProps> = ({ label }) =>{
  return (
    <div className={styles.list}>
      <button className={styles.button}>
        <span className={styles.label}>{label}</span>
        <img src={downArrow} className={styles.downArrow} />
      </button>
      <div className={styles.content}>
        <a href="https://blog.hubspot.com/">Blog</a>
        <a href="https://academy.hubspot.com/">Academy</a>
        <a href="https://www.youtube.com/user/hubspot">YouTube</a>
      </div>
    </div>
    
  )
}

export default DropDownList