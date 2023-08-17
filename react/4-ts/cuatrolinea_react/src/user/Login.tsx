import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import DangerLabel from "../common/components/DangerLabel"
import Form from "../common/components/Form"
import FormAcceptButton from "../common/components/FormAcceptButton"
import FormButton from "../common/components/FormButton"
import FormButtonBar from "../common/components/FormButtonBar"
import FormInput from "../common/components/FormInput"
import FormPassword from "../common/components/FormPassword"
import FormTitle from "../common/components/FormTitle"
import GlobalContent from "../common/components/GlobalContent"
import "../styles.css"
import { login } from "./userService"

interface ScreenErrors {
    userName?: string | undefined,
    password?: string | undefined,
    generic?: string | undefined,
}

export default function Login() {
    const history = useNavigate()
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState<ScreenErrors>({})

    const loginClick = async () => {
        const err: ScreenErrors = {}

        if (!userName) {
            err.userName = "No puede estar vacío"
        }
        if (!password) {
            err.password = "No puede estar vacío"
        }
        setErrors(err)
        if (hasErrors()) {
            return
        }

        try {
            await login({
                userName,
                password
            })
            history('/')
        } catch (error) {
            setErrors({ generic: "Error inesperado" })
        }
    }

    function hasErrors(): boolean {
        if (errors.password || errors.userName || errors.generic)
            return true
        else
            return false
    }

    return (
        <GlobalContent>
            <FormTitle>Login</FormTitle>

            <Form>
                <FormInput
                    label="Usuario"
                    name="userName"
                    errorText={errors.userName}
                    onChange={(event) => setUserName(event.target.value)} />

                <FormPassword
                    label="Password"
                    name="password"
                    errorText={errors.password}
                    onChange={(event) => setPassword(event.target.value)} />

                <DangerLabel message={errors.generic} />

                <FormButtonBar>
                    <FormAcceptButton label="Login" onClick={loginClick} />
                    <FormButton label="Cancelar" onClick={() => history('/')} />
                </FormButtonBar>
            </Form >
        </GlobalContent >
    )
}
