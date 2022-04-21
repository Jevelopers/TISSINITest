import stylesIndex from '../Page/Index.module.css'
import stylesButton from '../Components/Button.module.css'
import React, { Fragment } from 'react'
import Slider from '../Components/Slider'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import ElementImageHero from '../Image/ElementoImage3.png'

function Index() {
  return (
    <Fragment>
      <Navbar />
      <Slider />
      {/* Main*/}
      <div className={stylesIndex.wrapper}>
        <div className={stylesIndex.hero}>
          <div className={stylesIndex.content}>
            <div className={stylesIndex.image}>
              <img src={ElementImageHero} className={stylesIndex.image__responsive} alt='' />
            </div>
            <div className={stylesIndex.info}>
              <h2 className={stylesIndex.info__especial}>¡Hola! amiga,</h2>
              <h2 className={stylesIndex.info__title}>Bienvenida</h2>
              <h2 className={stylesIndex.info__subtitle}>Tu negocio propio con TISSINI</h2>
              <p className={stylesIndex.info__text}> Somos la compañía que apoya a las Mujeres Latinas en los Estados Unidos a alcanzar sus sueños.</p>
              <button className={stylesButton.button__ghost}>Saber más</button>
              <button className={stylesButton.button__especial}>Ver catálogo</button>

            </div>
          </div>
        </div>

        <div className={stylesIndex.catalogo}>
          <div className={stylesIndex.content}>
          
            
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  )
}

export default Index