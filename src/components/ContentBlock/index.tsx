import React, { JSXElementConstructor, ReactElement, ReactNode } from 'react'
import styles from "./index.module.css"

import Card from "../ProductCard"

import productionQuantity from "../../assets/icons/productionQuantity.png"

interface IProps{
  children: ReactNode | ReactElement
}

const DiscountBlock: React.FC<IProps> = ({ children }) =>{

  return (
    <div className={styles.contentBlock}>
      <div className={styles.contentGroup}>
        {children}
        {/* <div className={styles.content}>
          <Card img={ {src: productionQuantity, width: "180px"} }/>
        </div>
        <div className={styles.content}>
          <Card img={ {src: productionQuantity, width: "180px"} }/>
        </div>
        <div className={styles.content}>
          <Card img={ {src: productionQuantity, width: "180px"} }/>
        </div>
        <div className={styles.content}>
          <Card img={ {src: productionQuantity, width: "180px"} }/>
        </div> */}
      </div>
    </div>
  )
}

export default DiscountBlock