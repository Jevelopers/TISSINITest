import React from 'react'
import stylesNavbar from '../Components/Navbar.module.css'
import logotipo from '../Image/logotipoTISSINIBlanco.png'

function Navbar() {
  return (
    <div className= {stylesNavbar.container}>
        <div className= {stylesNavbar.brand}>
            <img src= {logotipo}  className= {stylesNavbar.brand__image} alt="" srcset="" />
        </div>
        <div className= {stylesNavbar.nav}>
            
        </div>
    </div>
  )
}

export default Navbar