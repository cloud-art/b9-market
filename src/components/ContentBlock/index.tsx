import React, { JSXElementConstructor, ReactElement, ReactNode } from 'react'
import styles from "./index.module.css"

interface IProps{
  children: ReactNode | ReactElement,
  styleBlock?: object
}

const DiscountBlock: React.FC<IProps> = ({ styleBlock, children }) =>{

  return (
    <div className={styles.contentBlock} style={styleBlock}>
      <div className={styles.contentGroup}>
        {children}
      </div>
    </div>
  )
}

export default DiscountBlock