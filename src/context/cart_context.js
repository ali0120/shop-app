/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useContext, useReducer } from 'react'
import reducer from '../reducers/cart_reducer'
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from '../actions'
const getLocalStorage = ()=>{
  let cart = localStorage.getItem('cart')
  if(cart){
    return JSON.parse(localStorage.getItem('cart'))
  }
  else{
    return []
  }
}
const initialState = {
  cart:getLocalStorage(),
  total_items :0,
  total_amount:0,
  shipping_fee:534
}

const CartContext = React.createContext()

export const CartProvider = ({ children }) => {
  const [state , dispatch] = useReducer(reducer , initialState)
  const addToCart = (id,color,amount,products)=>{
    dispatch({type:ADD_TO_CART , payload:{id,color,amount,products}})
  }
  useEffect(() => {
    dispatch({type:COUNT_CART_TOTALS})
    localStorage.setItem('cart' , JSON.stringify(state.cart))
  }, [state.cart])
  const clearCart = ()=>{
    dispatch({type:CLEAR_CART })
  }
  const removeItem = (id)=>{
    dispatch({type:REMOVE_CART_ITEM , payload:id})
  }
  const toggleItem = (id,value)=>{
    dispatch({type:TOGGLE_CART_ITEM_AMOUNT , payload :{id,value}})
  }
  return (
    <CartContext.Provider value={{
      ...state,
      addToCart,
      clearCart,
      removeItem,
      toggleItem
    }}>{children}</CartContext.Provider>
  )
}
// make sure use
export const useCartContext = () => {
  return useContext(CartContext)
}
