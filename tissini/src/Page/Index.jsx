import React, { Fragment } from 'react'
import Slider from '../Components/Slider'
import ElementBackground1 from '../Image/ElementoBackground1.png'

function Index() {
  return (
    <Fragment>
      <Slider />
      <div className='main'>
        <div className='main__section'>
          <div className='main__content'>
            <h2 className='content__title'>Tu negocio propio con <span>TISSINI</span></h2>
            <p className='content__text'>Somos la compañía que apoya a las Mujeres Latinas en los Estados Unidos a alcanzar sus sueños.Catalogada como la 1.° Empresa de Mayor Crecimiento en EEUU, por ICIC en el año 2020.</p>
            <p className='content__text'></p>
            <p></p>
            <button className='button'>Conocenos más</button>
          </div>
          <div className='main__content'>
            <img src={ElementBackground1} className='image-responsive' alt='' />

          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Index