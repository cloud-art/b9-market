import React, { FC } from 'react'

import Banner from '../../components/Banner'
import ContentBlock from '../../components/ContentBlock'
import List from '../../components/ProductNavigation'
import Card from "../../components/ProductCard"

import productionQuantity from "../../assets/icons/productionQuantity.png"

interface IProps{
}


const Homepage: React.FC<IProps> = ({ }) =>{

  return (
    <div>
      <ContentBlock>
        <List />
        <Banner />
        <Banner />
      </ContentBlock>
      <ContentBlock>
        <List />
        <Card img={ {src: productionQuantity, width: "180px"} }/>
        <Card img={ {src: productionQuantity, width: "180px"} }/>
        <Card img={ {src: productionQuantity, width: "180px"} }/>
      </ContentBlock>
      <ContentBlock>
        <List />
        <Card img={ {src: productionQuantity, width: "180px"} }/>
        <Card img={ {src: productionQuantity, width: "180px"} }/>
        <Card img={ {src: productionQuantity, width: "180px"} }/>
      </ContentBlock>
      <ContentBlock>
        <Card img={ {src: productionQuantity, width: "180px"} }/>
        <Card img={ {src: productionQuantity, width: "180px"} }/>
        <Card img={ {src: productionQuantity, width: "180px"} }/>
        <Card img={ {src: productionQuantity, width: "180px"} }/>
      </ContentBlock>
      
    </div>
  )
}

export default Homepage