import React from 'react'
import styleFooter from '../Components'

export default function Footer() {
    return (
        <Fragment>
            <div className={stylesFooter.container}>
                <div className={stylesFooter.content}>
                    <div className={stylesFooter.column__one}>
                        <div className={stylesFooter.brand}>
                            <img src={logotipoOficial} className={stylesFooter.brand__image} alt='' />
                        </div>
                        <div className={stylesFooter.info}>
                            <div className={stylesFooter.info}>
                                <h2 className={stylesFooter.info__text}>2323 NW 82nd Ave, Doral, FL 33122</h2>
                                <h2 className={stylesFooter.info__text}>Estados Unidos</h2>
                            </div>
                            <div className={stylesFooter.info}>
                                <h2 className={stylesFooter.info__title}>SÍGUENOS</h2>
                                <p className={stylesFooter.info__text}>Descubre nuestras redes sociales y todo el contenido interesante creado para ti.</p>
                                <div className={stylesFooter.info}>
                                    <ul className={stylesFooter.mSocial__item}>
                                        <li className={stylesFooter.item}></li>
                                        <li className={stylesFooter.item}></li>
                                        <li className={stylesFooter.item}></li>
                                        <li className={stylesFooter.item}></li>
                                        <li className={stylesFooter.item}></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className={stylesFooter.column__two}>
                        <div className={stylesFooter.info}>
                            <h2 className={stylesFooter.info__title}>APRENDE CON TISSINI</h2>
                            <div className={stylesFooter.info}>
                                <p className={stylesFooter.info__text}>¿Cómo funciona venta por catálogo?</p>
                                <p className={stylesFooter.info__text}>¿Cuál emprendimiento es mejor?</p>
                                <p className={stylesFooter.info__text}>¿Por qué tener un negocio propio?</p>
                                <p className={stylesFooter.info__text}>¿Cómo ganar ingresos extras desde casa?</p>
                            </div>
                        </div>
                        <div className={stylesFooter.info}>
                            <h2 className={stylesFooter.info__title}>LLÁMANOS</h2>
                            <div className={stylesFooter.info}>
                                <p className={stylesFooter.info__text}>Marca a nuestra Línea de atención <span>+1 800 341 0799</span>  y te asesoraremos en lo que desees.</p>

                            </div>
                        </div>
                        <div className={stylesFooter.info}>
                            <h2 className={stylesFooter.info__title}>¿PREFIERES QUE TE LLAMEMOS?</h2>
                            <div className={stylesFooter.info}>
                                <p className={stylesFooter.info__text}>Completa el formulario en segundos y recibe atención personalizada. <span>¡Te llamamos!</span></p>

                            </div>
                        </div>

                    </div>
                    <div className={stylesFooter.column__three}>
                        <div className={stylesFooter.info}>
                            <h2 className={stylesFooter.info__title}>DESCARGA TU TISSINI APP</h2>
                            <div className={stylesFooter.info}>
                                <button className={stylesButton.button}>Play Store</button>
                                <button className={stylesButton.button}>Apple Store</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={stylesFooter.copyright}>
                <p className={stylesFooter.info__text}>2021 TISSINI. Todos los derechos reservados. | Políticas de privacidad | Términos y condiciones | Uso de cookies</p>

            </div>
        </Fragment>

    )
}
