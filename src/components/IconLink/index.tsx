import React from 'react'
import styles from "./index.module.css"

interface IProps{
    icon: string,
    styleProps?: object
}


const IconLink: React.FC<IProps> = ({ icon, styleProps }) =>{
  return (
    <button className={styles.button}>
        <img src={icon} className={styles.icon} style={styleProps}/>
    </button>
  )
}

export default IconLink