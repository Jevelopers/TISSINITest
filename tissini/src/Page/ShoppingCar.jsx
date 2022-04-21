import stylesShoppingCar from '../Page/ShoppingCar.module.css'
import styleButton from '../Components/Button.module.css'
import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShield, faCartShopping } from '@fortawesome/free-solid-svg-icons'


export default function ShoppingCar() {
  return (
    <Fragment>
      <Navbar />
      <div className={stylesShoppingCar.header}>
        <FontAwesomeIcon icon={faShield} className={stylesShoppingCar.icon} />
        <p className= {stylesShoppingCar.header__text}>Tu compra es <span>100% segura</span> </p>
      </div>
      <div className= {stylesShoppingCar.main}>
        <div className= {stylesShoppingCar.content}>
          <FontAwesomeIcon className={stylesShoppingCar.content__icon} icon={faCartShopping} />
          <h2 className= {stylesShoppingCar.content__title}>Tu carrito está vacío</h2>
          <p className= {stylesShoppingCar.content__text}>En tissini.com tenemos más 2 mil productos para que elijas la que más te gusta.</p>
          <Link to="/"><button className= {styleButton.button__especial}>SEGUE COMPRANDO</button></Link>
        </div>

      </div>
      <Footer />
    </Fragment>
  )
}
