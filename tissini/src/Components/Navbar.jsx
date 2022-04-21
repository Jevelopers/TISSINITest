import React from 'react'
import { Link } from 'react-router-dom'
import stylesNavbar from '../Components/Navbar.module.css'
import stylesButton from '../Components/Button.module.css'
import logotipo from '../Image/logotipoTISSINIBlanco.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  return (
    <div className={stylesNavbar.container}>
      <div className={stylesNavbar.brand}>
        <Link to="/" className={stylesNavbar.item}><img src={logotipo} className={stylesNavbar.brand__image} alt="" srcset="" /></Link>
      </div>
      <div className={stylesNavbar.nav}>
        <Link to="/" className={stylesNavbar.item}>Inicio</Link>
        <Link to="/" className={stylesNavbar.item}>Somos</Link>
        <Link to="/" className={stylesNavbar.item}>Productos</Link>
        <Link to="/" className={stylesNavbar.item}>Cátalogos</Link>
        <Link to="/" className={stylesNavbar.item}>Mi cuenta</Link>
        <Link to="/" className={stylesNavbar.item}>Contacto</Link>
        <div className={stylesNavbar.nav__span}>
          <Link to="/ShoppingCar">
            <FontAwesomeIcon className={stylesNavbar.icon} icon={faCartShopping} />
          </Link>
          <Link to="/Login" className={stylesNavbar.item}>
            <button className={stylesButton.button}>Mi cuenta</button>
          </Link>
        </div>

      </div>
    </div>
  )
}

export default Navbar