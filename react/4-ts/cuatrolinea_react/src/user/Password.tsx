import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import DangerLabel from "../common/components/DangerLabel"
import Form from "../common/components/Form"
import FormAcceptButton from "../common/components/FormAcceptButton"
import FormButton from "../common/components/FormButton"
import FormButtonBar from "../common/components/FormButtonBar"
import FormPassword from "../common/components/FormPassword"
import FormTitle from "../common/components/FormTitle"
import GlobalContent from "../common/components/GlobalContent"
import "../styles.css"
import { changePassword } from "./userService"

interface ScreenErrors {
    currentPassword?: string | undefined,
    newPassword?: string | undefined,
    newPassword2?: string | undefined,
    generic?: string | undefined,
}

export default function Password() {
    const history = useNavigate()
    const [currentPassword, setCurrentPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [newPassword2, setNewPassword2] = useState("")
    const [errors, setErrors] = useState<ScreenErrors>({})

    const updatePasswordClick = async () => {
        const err: ScreenErrors = {}

        if (!currentPassword) {
            errors.currentPassword = "No puede estar vacío"
        }
        if (!newPassword) {
            errors.newPassword = "No puede estar vacío"
        }
        if (newPassword !== newPassword2) {
            errors.newPassword2 = "Las contraseñas no coinciden"
        }
        setErrors(err)
        if (hasErrors()) {
            return
        }

        try {
            await changePassword({
                currentPassword,
                newPassword
            })
            history("/")
        } catch (error) {
            setErrors({ generic: "Error inesperado" })
        }
    }

    function hasErrors(): boolean {
        if (errors.currentPassword || errors.newPassword || errors.newPassword2 || errors.generic)
            return true
        else
            return false
    }

    return (
        <GlobalContent>
            <FormTitle>Cambiar Password</FormTitle>

            <Form>
                <FormPassword
                    label="Password Actual"
                    name="currentPassword"
                    errorText={errors.currentPassword}
                    onChange={event => setCurrentPassword(event.target.value)} />

                <FormPassword
                    label="Nuevo Password"
                    name="newPassword"
                    errorText={errors.newPassword}
                    onChange={event => setNewPassword(event.target.value)} />

                <FormPassword
                    label="Repetir Password"
                    name="newPassword2"
                    errorText={errors.newPassword2}
                    onChange={event => setNewPassword2(event.target.value)} />

                <DangerLabel message={errors.generic} />

                <FormButtonBar>
                    <FormAcceptButton label="Cambiar" onClick={updatePasswordClick} />
                    <FormButton label="Cancelar" onClick={() => history("/")} />
                </FormButtonBar>
            </Form >
        </GlobalContent>
    )
}
