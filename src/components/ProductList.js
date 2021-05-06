/* eslint-disable no-unused-vars */
import React from 'react'
import { useFilterContext } from '../context/filter_context'
import GridView from './GridView'
import ListView from './ListView'

const ProductList = () => {
  const { filter_products : products , grid_view } = useFilterContext()
  if(products < 1){
    return <p>no item found</p>
  }
  if(grid_view === false) {
    return <ListView products = {products}/>
  }
  return (
    <GridView products={products} />
  )
}

export default ProductList
