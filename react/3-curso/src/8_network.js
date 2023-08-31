import React, { useEffect, useState } from "react"
import axios from "axios"

/**
 * Para obtener datos desde la web podemos usar fetch, pero es muy limitado
 * Por eso usamos axios, que es mucho mas completo, se instala el paquete y se usa.
 */
export default function NetworkCall() {
    const [repositories, setRepositories] = useState([])

    /*
     * Notar que es conveniente siempre hacer las llamadas de red desde componentDidMount
     */
    const componentDidMount = async () => {
        try {
            const response = await axios.get('https://api.github.com/users/nmarsollier/repos')
            setRepositories(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        componentDidMount()
    }, [])

    return (
        <div>
            <h1>Repositorios</h1>
            {
                repositories.map(repo =>
                    <p key={repo.name}>
                        <a href={repo.html_url}>{repo.name}</a> : {repo.description}
                    </p>
                )
            }
        </div>
    )
}
