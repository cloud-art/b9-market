import React from 'react'
import styles from "./index.module.css"

import Navigation from "./components/Navigation"

interface IProps{
}


const Menus: React.FC<IProps> = ({ }) =>{

  return (
    <div className={styles.footer}>
      <Navigation />
      <span className={styles.rights}>
        Copyright © 2020 petrbilek.com
      </span>
    </div>
  )
}

export default Menus