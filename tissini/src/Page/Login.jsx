import React from 'react'
import stylesLogin from '../Page/Login.module.css'
import stylesFooter from '../Components/Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import logotipoOficiaL from '../Image/logotipoTISSINIBlanco.png'
import Formulario from '../Components/Formulario'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className={stylesLogin.container}>
      <div className={stylesLogin.content}>
        <div className={stylesLogin.brand}>
          <Link to="/"><img src={logotipoOficiaL} className={stylesLogin.brand__image} alt="" srcset="" /></Link>
          <p className={stylesLogin.brand__text}>Ingresa el número de teléfono de tu asesora independiente.</p>
        </div>
        <div className={stylesLogin.content__form}>
          <Formulario />
        </div>
      </div>
      <div className={stylesLogin.image}>
        <div className={stylesFooter.copyright__especial}>
          <FontAwesomeIcon className={stylesFooter.item} icon={faCopyright} />
          <p className={stylesFooter.info__text}>2022 Jevelopers. Todos los derechos reservados a Jevelopers para TISSINI. | Políticas de privacidad | Términos y condiciones | Uso de cookies</p>
        </div>
      </div>

    </div>
  )
}
