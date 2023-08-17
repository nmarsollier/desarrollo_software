import React, { useState } from "react"

/**
 * Los formularios funcionan un poco diferente a html normal
 *
 */
export default function NameForm() {
    const [nombrePersona, setNombrePersona] = useState("")
    const [message, setMessage] = useState("")

    // Cuando los formularios son complejos, conviene actualizar el estado cuando
    // los elementos cambian, y mantener el estado actualizado
    // Conviene hacerse librerias que hagan esto de forma consistente en toda la app
    let handleChange = (event) => {
        setNombrePersona(event.target.value );
    }

    // Ya no quieremos subir mas el formulario automaticamente, en su lugar queremos
    // usar codigo javascript para subir nuestro documento en una llamada rest
    let handleSubmit = (event) => {
        event.preventDefault();
       setMessage(`A name was submitted: ${nombrePersona}`);
    }

    return (
        <form onSubmit={handleSubmit}>
            <br/><br/><br/>
            <label>
                Name:
                <input id="nombrePersona" type="text" value={nombrePersona} onChange={handleChange} />
            </label>

            <input type="submit" value="Submit" />

            <br/>
            {message}
        </form>
    );
}

/**
 * Continuamos viendo mas ejemplos en
 * https://es.reactjs.org/docs/forms.html
 *
 * Y componentes no controlados
 * https://es.reactjs.org/docs/uncontrolled-components.html
 */

export { NameForm }