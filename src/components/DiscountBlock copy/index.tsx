import React from 'react'
import styles from "./index.module.css"

import Banner from "./components/Banner"

interface IProps{
}


const DiscountBlock: React.FC<IProps> = ({ }) =>{

  return (
    <div className={styles.discountBlock}>
      <div className={styles.bannerGroup}>
        <div className={styles.banner}>
          <Banner/>
        </div>
        <div className={styles.banner}>
          <Banner/>
        </div>
        <div className={styles.banner}>
          <Banner/>
        </div>
        <div className={styles.banner}>
          <Banner styleProps={{"margin-left" : "30px"}}/>
        </div>
      </div>
    </div>
  )
}

export default DiscountBlock