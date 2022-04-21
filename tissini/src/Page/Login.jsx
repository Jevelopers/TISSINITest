import React from 'react'
import stylesLogin from '../Page/Login.module.css'
import logotipoOficiaL from '../Image/logotipoTISSINIBlanco.png'
import Formulario from '../Components/Formulario'

export default function Login() {
  return (
    <div className= {stylesLogin.container}>
      <div className= {stylesLogin.content}>
        <div className= {stylesLogin.brand}>
          <img src= {logotipoOficiaL} className= {stylesLogin.brand__image} alt="" srcset="" />
          <p className= {stylesLogin.brand__text}>Ingresa el número de teléfono de tu asesora independiente.</p>
        </div>
        <div className= {stylesLogin.content__form}>
          <Formulario />
        </div>
      </div>
      <div className= {stylesLogin.container__image}>
      </div>

    </div>
  )
}
