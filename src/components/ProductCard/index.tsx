import React from 'react'
import styles from "./index.module.css"

import IProduct from "../../types/IProduct"

interface IProps{
  product?: IProduct
}

const Card: React.FC<IProps> = ({ product }) =>{
  return (
    <div className={styles.card}>
      <img src="" alt="" className={styles.image}/>
      <div className={styles.main}>
        <span className={styles.title}>Product title</span>
        <span className={styles.description}>Space for a small product description</span>
      </div>
      <div className={styles.footer}>
        <div className={styles.price}>
            111 USD
        </div>
        <button className={styles.button}> 
            Buy now
        </button>
      </div>
    </div>
  )
}

export default Card