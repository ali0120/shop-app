/* eslint-disable no-unused-vars */
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

const products_reducer = (state, action) => {
  if(action.type === SIDEBAR_OPEN){
    return {...state , isSideBarOpen:true}
  }
  if(action.type === SIDEBAR_CLOSE){
    return {...state , isSideBarOpen:false }
  }
  if(action.type === GET_PRODUCTS_BEGIN){
    return {...state , is_loading : true}
  }
  if(action.type === GET_PRODUCTS_SUCCESS){
    const feature_product = action.payload.filter((product)=> product.featured === true)
    return {...state , is_loading:false , products:action.payload , feature_product}
  }
  if(action.type === GET_SINGLE_PRODUCT_BEGIN){
    return {...state , SINGLE_PRODUCT_loading: true}
  }
  if(action.type === GET_SINGLE_PRODUCT_SUCCESS){
    return {...state , SINGLE_PRODUCT_loading:false , SINGLE_PRODUCTS:action.payload }
  }
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default products_reducer
