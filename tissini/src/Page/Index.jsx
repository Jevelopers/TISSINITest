import stylesIndex from '../Page/Index.module.css'
import stylesButton from '../Components/Button.module.css'
import React, { Fragment } from 'react'
import Slider from '../Components/Slider'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import ElementImage from '../Image/ElementoImage1.png'

function Index() {
  return (
    <Fragment>
      <Navbar />
      <Slider />
      <div className={stylesIndex.container}>
        <div className={stylesIndex.content}>
          <div className={stylesIndex.content__column}>
            <h2 className={stylesIndex.content__especial}>¡Hola! amiga,</h2>
            <h2 className={stylesIndex.content__title}>Bienvenida</h2>
            <h2 className={stylesIndex.content__subtitle}>Tu negocio propio con <span>TISSINI</span></h2>
            <p className={stylesIndex.content__text}>Somos la compañía que apoya a las Mujeres Latinas en los Estados Unidos a alcanzar sus sueños.Catalogada como la 1.° Empresa de Mayor Crecimiento en EEUU, por ICIC en el año 2020.</p>
            <p className={stylesIndex.content__text}></p>
            <p></p>
            <button className={stylesButton.button}>Conocenos más</button>
          </div>
          <div className={stylesIndex.content__column}>
            <img src={ElementImage} className={stylesIndex.image__responsive} alt='' />
          </div>
        </div>
      </div>

      <div className={stylesIndex}>
        <div className={stylesIndex.content}>
          <div className={stylesIndex.content__column}></div>
          <div className={stylesIndex.content__column}></div>
        </div>
      </div>
      <Footer />
    </Fragment>
  )
}

export default Index