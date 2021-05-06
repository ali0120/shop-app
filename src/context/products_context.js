/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import axios from 'axios'
import React, { useContext, useEffect, useReducer } from 'react'
import reducer from '../reducers/products_reducer'
import { products_url as url } from '../utils/constants'
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from '../actions'

const initialState = {
  isSideBarOpen : false,
  is_loading : false,
  products: [],
  feature_product:[],
  SINGLE_PRODUCT_loading:false,
  SINGLE_PRODUCTS:[]
}

const ProductsContext = React.createContext()

export const ProductsProvider = ({ children }) => {
  const [state , dispatch] = useReducer(reducer, initialState)
  const openSidebar = ()=>{
    dispatch({type:SIDEBAR_OPEN})
  }
  const closeSidebar = ()=>{
    dispatch({type:SIDEBAR_CLOSE})
  }
  const featchProducts = async(url)=>{
    dispatch({type:GET_PRODUCTS_BEGIN})
    try {
      const response = await axios.get(url)
      const data = response.data
      dispatch({type:GET_PRODUCTS_SUCCESS , payload: data})
    } catch (error) {
      console.log(error)
    }
  }
  const featchSingleProducts = async(url)=>{
    dispatch({type:GET_SINGLE_PRODUCT_BEGIN})
    try {
      const response = await axios.get(url)
      const singleProduct = response.data
      dispatch({type:GET_SINGLE_PRODUCT_SUCCESS, payload: singleProduct})
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    featchProducts(url)
  }, [])
  return (
    <ProductsContext.Provider value={{
      ...state,
      openSidebar,
      closeSidebar,
      featchSingleProducts
    }}>
      {children}
    </ProductsContext.Provider>
  )
}
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext)
}
export  {  ProductsContext }