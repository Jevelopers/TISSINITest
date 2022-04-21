import React from 'react'
import stylesButton from '../Components/Button.module.css'

export default function Button() {
    return (
        <div className={stylesButton.container}>
            <button class={stylesButton.button}></button>
        </div>
    )
}
