import React, { useEffect, useState } from "react"

let timerID;

/**
 * El estado y su renderizacion
 */
export default function Clock() {
    const [dataState, setDataState] = useState({
        date: new Date(),
        name: "Nestor"
    })

    useEffect(() => {
        timerID = setInterval(
            () =>  {
                setDataState({
                    date: new Date()
                });
            },
            1000
        );
        return () => {
            clearInterval(timerID);
        }
    }, [])

    return (
        <div>
            <h1>Hello, world!</h1>
            <h2>Podemos usar el estado directamente {dataState.date.toLocaleTimeString()}.</h2>
            <FormattedDate date={dataState.date} />
        </div>
    );
}

function FormattedDate(props) {
    return <h2>O pasarle como parametro a un elemento hijo: {props.date.toLocaleTimeString()}.</h2>;
}
