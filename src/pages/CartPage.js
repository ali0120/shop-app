/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'
import emptyCart from '../assets/cart-empty.jpg'
import { CartContent, PageHero } from '../components'

const CartPage = () => {
  const {cart} = useCartContext()
  if(cart.length <1) {
    return(
      <Wrapper className='page-100'>
        <div className="empty">
          <img src={emptyCart} alt="" />
          <Link to='/products' className='btn'>
            fill it
          </Link>
        </div>
      </Wrapper>
    )
  }
  return (
    <main>
      <PageHero title="cart" />
      <Wrapper className="page">
        <CartContent />
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.main`
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
    img{
      height: 200px;
      display: block;
      margin: 0 auto
    }
  }
`

export default CartPage
