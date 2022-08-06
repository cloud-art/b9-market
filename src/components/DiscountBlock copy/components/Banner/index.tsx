import React from 'react'
import styles from "./index.module.css"

interface IProps{
  styleProps?: object
}

const Banner: React.FC<IProps> = ({ styleProps }) =>{
  return (
    <div className={styles.banner}>
      <div className={styles.view}>
        <div className={styles.subfocus}>Banner subfocus</div>
        <div className={styles.heading}>Space for heading</div>
      </div>
      
      <button className={styles.button}> 
        Read receipe
      </button>
    </div>
  )
}

export default Banner