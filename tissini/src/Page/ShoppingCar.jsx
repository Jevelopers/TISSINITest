import React, { Fragment } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import StylesShoppingCar from '../Page/ShoppingCar.module.css'

export default function ShoppingCar() {
  return (
    <Fragment>
      <Navbar />
      <div className= {StylesShoppingCar.header}>
        <p>Tu compra es <span>100% segura</span> </p>
      </div>
      <Footer />
    </Fragment>
  )
}
