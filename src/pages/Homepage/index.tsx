import React from 'react'

import DiscountBlock from '../../components/DiscountBlock'
import ProductsBlock from "../../components/ProductsBlock"

function index() {

  return (
    <div>
      <ProductsBlock />
      <ProductsBlock />
      <DiscountBlock />
    </div>
  )
}

export default index