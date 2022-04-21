import React from 'react'
import { Link } from 'react-router-dom'
import stylesNavbar from '../Components/Navbar.module.css'
import stylesButton from '../Components/Button.module.css'
import logotipo from '../Image/logotipoTISSINIBlanco.png'

function Navbar() {
  return (
    <div className={stylesNavbar.container}>
      <div className={stylesNavbar.brand}>
        <img src={logotipo} className={stylesNavbar.brand__image} alt="" srcset="" />
      </div>
      <div className={stylesNavbar.nav}>
        <Link to="/" className={stylesNavbar.item}>Inicio</Link>
        <Link to="/Somos" className={stylesNavbar.item}>Somos</Link>
        <Link to="/Somos" className={stylesNavbar.item}>Oportunidad</Link>
        <Link to="/Somos" className={stylesNavbar.item}>Productos</Link>
        <Link to="/Somos" className={stylesNavbar.item}>Cátalogos</Link>
        <Link to="/Somos" className={stylesNavbar.item}>Blog</Link>
        <Link to="/Contacto" className={stylesNavbar.item}>Contacto</Link>
        <div className={stylesNavbar.item__button}>
          <button className={stylesButton.button}>Reservar</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar