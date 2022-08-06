import React from 'react'
import styles from "./index.module.css"

interface IProps{
}


const Navigation: React.FC<IProps> = ({ }) =>{

  return (
    <div className={styles.navigation}>
      <div className={styles.section}>
        <span className={styles.label}>
          Get in touch
        </span>
        <div className={styles.links}>
          <a href="">About Us</a>
          <a href="">Careers</a>
          <a href="">Press Realeases</a>
          <a href="">Blog</a>
        </div>
      </div>
      <div className={styles.links}>
        <span className={styles.label}>
          Connections
        </span>
        <div className={styles.links}>
          <a href="">Facebook</a>
          <a href="">Twitter</a>
          <a href="">Instagram</a>
          <a href="">Youtube</a>
          <a href="">LinkedIn</a>
        </div>
      </div>
      <div className={styles.links}>
        <span className={styles.label}>
          Earnings
        </span>
        <div className={styles.links}>
          <a href="">Become an Affiliate</a>
          <a href="">Advertise your product</a>
          <a href="">Sell on Market</a>
        </div>
      </div>
      <div className={styles.links}>
        <span className={styles.label}>
          Accounts
        </span>
        <div className={styles.links}>
          <a href="">Your account</a>
          <a href="">Returns Centre</a>
          <a href="">100% purchase protection</a>
          <a href="">Chat with us</a><a href="">Help</a>
        </div>
      </div>
    </div>
  )
}

export default Navigation