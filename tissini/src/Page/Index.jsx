import stylesIndex from '../Page/Index.module.css'
import stylesButton from '../Components/Button.module.css'
import React, { Fragment } from 'react'
import Slider from '../Components/Slider'
import ElementImage from '../Image/ElementoImage1.png'

function Index() {
  return (
    <Fragment>
      <Slider />
      <div className= {stylesIndex.container}>
        <div className= {stylesIndex.content}>
          <div className= {stylesIndex.content__column}>
            <h2 className= {stylesIndex.title}>Tu negocio propio con <span>TISSINI</span></h2>
            <p className= {stylesIndex.text}>Somos la compañía que apoya a las Mujeres Latinas en los Estados Unidos a alcanzar sus sueños.Catalogada como la 1.° Empresa de Mayor Crecimiento en EEUU, por ICIC en el año 2020.</p>
            <p className= {stylesIndex.text}></p>
            <p></p>
            <button className= {stylesButton.button}>Conocenos más</button>
          </div>
          <div className= {stylesIndex.content__column}>
            <img src={ElementImage} className='image-responsive' alt='' />

          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Index