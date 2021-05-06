/* eslint-disable react/no-children-prop */
/* eslint-disable */
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
import {
  Home,
  About,
  Error,
  Products,
  SingleProduct,
  PrivateRouter,
  Cart,
  Chechout
} from './pages'

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/about'>
          <About/>
        </Route>
        <Route exact path='/products'>
          <Products />
        </Route>
        <Route exact path='/products/:id' children={<SingleProduct/>}></Route>
        <PrivateRouter exact path='/checkout'>
          <Chechout/>
        </PrivateRouter>
        <Route exact path='/cart'>
          <Cart/>
        </Route>
        <Route path='*'>
          <Error/>
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
