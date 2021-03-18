import React from 'react'
import Products from './Products'
import Details from './Details'
import { Route } from 'react-router-dom'

const Section = () => {
  return (
    <section>
      <Route path='/products' component={Products} exact />
      <Route path='/products/:id' component={Details} />
    </section>
  )
}

export default Section
