import React from 'react'
import stylesFormulario from '../Components/Formulario.module.css'

export default function Formulario() {
  return (
    <div className= {stylesFormulario.container}>
        <form>
          <input type="text" className= {stylesFormulario.input} placeholder='ododosd' />
      </form>
    </div>
  )
}
