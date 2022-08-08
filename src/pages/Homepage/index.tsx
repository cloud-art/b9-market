import React, { FC } from 'react'

import DiscountBlock from '../../components/DiscountBlock'
import ProductsBlock from "../../components/ProductsBlock"

interface IProps{
}


const Homepage: React.FC<IProps> = ({ }) =>{

  return (
    <div>
      <ProductsBlock />
      <ProductsBlock />
      <DiscountBlock />
    </div>
  )
}

export default Homepage