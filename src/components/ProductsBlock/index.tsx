import React from 'react'
import styles from "./index.module.css"

interface IProps{
    productBlock: object
}


const Menus: React.FC<IProps> = ({ productBlock }) =>{
  const labelDDStyle = {
    "font-weight": "300",
    "font-size": "17px"
  }

  return (
    <div className={styles.productB}>
        <h1>Categories</h1>
        <h1>Cards</h1>
    </div>
  )
}

export default Menus