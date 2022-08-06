import React from 'react'
import styles from "./index.module.css"

import Card from "../ProductCard"

interface IProps{
}


const DiscountBlock: React.FC<IProps> = ({ }) =>{

  return (
    <div className={styles.discountBlock}>
      <div className={styles.bannerGroup}>
        <div className={styles.banner}>
            <Card />
        </div>
        <div className={styles.banner}>
            <Card />
        </div>
        <div className={styles.banner}>
            <Card />
        </div>
        <div className={styles.banner}>
            <Card />
        </div>
      </div>
    </div>
  )
}

export default DiscountBlock