import React, { FC } from 'react'
import styles from "./index.module.css"

import Banner from '../../components/Banner'
import ContentBlock from '../../components/ContentBlock'
import DiscountBlock from './components/DiscountBlock'
import List from '../../components/ProductNavigation'
import Card from "../../components/ProductCard"

import productionQuantity from "../../assets/icons/productionQuantity.png"


interface IProps{
}


const Homepage: React.FC<IProps> = ({ }) =>{

  return (
    <div className={styles.page}>
      <ContentBlock styleBlock={{padding: "64px 0"}}>
        <List />
        <Banner />
        <Banner />
      </ContentBlock>
      <ContentBlock styleBlock={{padding: "64px 0"}}>
        <List />
        <Card img={ {src: productionQuantity, width: "180px"} }/>
        <Card img={ {src: productionQuantity, width: "180px"} }/>
        <Card img={ {src: productionQuantity, width: "180px"} }/>
      </ContentBlock>
      <ContentBlock styleBlock={{padding: "64px 0"}}>
        <List />
        <Card img={ {src: productionQuantity, width: "180px"} }/>
        <Card img={ {src: productionQuantity, width: "180px"} }/>
        <Card img={ {src: productionQuantity, width: "180px"} }/>
      </ContentBlock>
      <DiscountBlock styleBlock={{padding: "64px 0"}}/>
    </div>
  )
}

export default Homepage