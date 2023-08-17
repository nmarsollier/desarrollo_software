/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react"

/**
 * Los eventos tienen algunas diferencias, ejemplo :
 */
function ActionLink() {
    const [message, setMessage] = useState("Click button")

    let handleClick = (e) => {
        // Para prevenir que un link relice una accion predeterminada usamos preventDefault()
        e.preventDefault();
        setMessage("The link was clicked.");
    }

    return (
        <div>
            <br /><br /><br /><br />

            <a href="/#" onClick={handleClick}>
                {message}
            </a>
        </div>
    );
}

/**
 * Es conveniente manejar el estado de cada uno de los elementos de la ui
 * dentro de state, por ejemplo campos de texto, check boxes, etc.
 *
 * De forma que siempre guardemos nuestro estado en state y a partir de alli
 * se renderiza toda la ui
 */
function Toggle(){
    const [toggle, setToggle] = useState(true)

    let handleClick = () => {
        setToggle(!toggle);
    }

    return (
        <div>
            <button onClick={handleClick}>
                {toggle ? 'ON' : 'OFF'}
            </button>
        </div>
    );
}

/**
 * Comunicacion entre componentes,
 *
 * Cuando nos queremos comunicar desde el padre al hijo, lo hacemos con parametros,
 * Cuando nos queremos comunicar desde el hijo al padre, lo hacemos con call back.
 *
 */


export { ActionLink, Toggle }
