import React from "react";
import { Provider } from "react-redux";
import { store } from './10_redux_store';
import { useSelector } from 'react-redux';
import { dispatchTextChange } from './10_redux_store';

/**
 * Es un texto que escucha mensajes y muestra el valor obtenido,
 * this.props.text, ese valor va a ser bindeado al currentText de store
 */
function ReduxLabel() {
    const text = useSelector(state => state.currentText)

    return (
        <div>
            {text}
        </div>
    );
}

/**
 * Es un input text, cuando el usuario escribe se envian mensajes a redux con el texto actual
 */
function ReduxText() {
    let handleChange = (event) => {
        // Enviamos el mensaje
        dispatchTextChange(event.target.value)
    }

    return (
        <div>
            <input id="nombrePersona" type="text" onChange={(event) => handleChange(event)} />
        </div>
    );
}

/**
 * Es un boton que cuando se hace click se reseta el texto
 */
function ReduxButton() {
    let handleClick = () => {
        // Enviamos el mensaje
        dispatchTextChange("Click - Valor restablecido")
    }

    return (
        <div>
            <button onClick={() => handleClick()}>
                Restablecer valor
            </button>
        </div>
    );
}

/**
 * Este ejemplo muestra un input, y un boton que envian mensajes
 * y un texto que escucha los eventos,
 *
 * Noten la definición de Provider, para que react-redux funcione, necesitamos
 * si o si poner todos los componentes que van a usar ese store , dentro de un provider
 *
 * Es comun tener un provider global que se defina en el componente principal, en este
 * caso es un provider que usamos solo en este ejemplo, para estos controles
 */
export default function EjemploRedux() {
    return (
        <div>
            <Provider store={store}>
                <h1>Redux </h1>
                <ReduxText /><br />
                <ReduxButton /><br /><br />

                En otro lado de la app, podemos mostrar el estado<br /><br />
                Estado Acutal :
                <ReduxLabel /> <br />
            </Provider>
        </div>
    );
}

export { EjemploRedux };
