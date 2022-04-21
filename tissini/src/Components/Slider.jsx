import React from 'react'
import stylesSlider from '../Components/Slider.module.css'

export default function Slider() {
  return (
    <div className={stylesSlider.container}>
      <div className={stylesSlider.content}>
          <p className={stylesSlider.content__text}>Emprende hoy tu negocio propio en USA</p>
          <h1 className={stylesSlider.content__title}>Imparables</h1>
      </div>
    </div>
  )
}
