import React from "react"
import Form from "../common/components/Form"
import FormTitle from "../common/components/FormTitle"
import { useSessionUser } from "../store/userStore"
import { useSessionToken } from "../store/tokenStore"

export default function StateInfo() {
    const user = useSessionUser()
    const token = useSessionToken()

    return (
        <div>
            <FormTitle>Información de Perfil</FormTitle>

            <Form>
                <div className="form-group">
                    <label>Nombre</label>
                    <input className="form-control" id="name" value={user?.name} disabled />
                </div>
                <div className="form-group">
                    <label>Token</label>
                    <input className="form-control" id="name" value={token} disabled />
                </div>
            </Form>
        </div>
    )
}

