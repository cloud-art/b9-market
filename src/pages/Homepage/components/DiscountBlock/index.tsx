import React, { JSXElementConstructor, ReactElement, ReactNode } from 'react'
import styles from "./index.module.css"

import Card from "../../../../components/ProductCard"
import ContentBlock from "../../../../components/ContentBlock"

import productionQuantity from "../../../../assets/icons/productionQuantity.png"

interface IProps{
	styleBlock?: object
}

const DiscountBlock: React.FC<IProps> = ({ styleBlock }) =>{

  return (
    <div className={styles.discountBlock} style={styleBlock}>
			{/* потом отделить в отдельный компонент */}
      <div className={styles.header}>
				<span className={styles.label}>Section Headline</span>
				<a href="" className={styles.button}>Button</a>
			</div>
      <ContentBlock>
        <Card img={ {src: productionQuantity, width: "180px"} }/>
        <Card img={ {src: productionQuantity, width: "180px"} }/>
        <Card img={ {src: productionQuantity, width: "180px"} }/>
        <Card img={ {src: productionQuantity, width: "180px"} }/>
      </ContentBlock>
    </div>
  )
}

export default DiscountBlock