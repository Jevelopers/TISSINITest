import React from 'react'
import stylesFormulario from '../Components/Formulario.module.css'
import stylesButton from '../Components/Button.module.css'

export default function Formulario() {
  return (
    <form className={stylesFormulario.form}>
      <div className={stylesFormulario.form__container}>
        <div className={stylesFormulario.form__group}>
          <input type="number" className={stylesFormulario.form__input} id="codeNumber" placeholder='' required />
          <label className={stylesFormulario.form__label}>Teléfono:</label>
        </div>
        <input type="submit" className={stylesButton.button__especial} value="Entrar" />
      </div>
    </form>
  )
}
