import React from 'react'
import stylesFormulario from '../Components/Formulario.module.css'

export default function Formulario() {
  return (
    <div className= {stylesFormulario.container}>
        <form>
            <div className= {stylesFormulario.group}></div>
          <input type="text" className= {stylesFormulario.input}  placeholder='ododosd' required />
          <label htmlFor=""></label>
      </form>
    </div>
  )
}
