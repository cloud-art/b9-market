import React from 'react'
import styles from "./index.module.css"

import List from './components/List'
import Banner from "./components/Banner"

interface IProps{
    children?: object
}


const Menus: React.FC<IProps> = ({ children }) =>{

  return (
    <div className={styles.productB}>
      <List />
      <div className={styles.bannerGroup}>
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

export default Menus