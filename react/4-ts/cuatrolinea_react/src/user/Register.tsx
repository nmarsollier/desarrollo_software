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
import { newUser } from "./model/newUserService"

interface ScreenErrors {
  name?: string | undefined,
  password?: string | undefined,
  password2?: string | undefined,
  generic?: string | undefined,
}

export default function Register() {
  const history = useNavigate()
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [password2, setPassword2] = useState("")
  const [errors, setErrors] = useState<ScreenErrors>({})

  const registerClick = async () => {
    const err: ScreenErrors = {}
    if (!name) {
      err.name = "No puede estar vacío"
    }
    if (!password) {
      err.password = "No puede estar vacío"
    }
    if (password !== password2) {
      err.password2 = "Las contraseñas no coinciden"
    }
    setErrors(err)
    if (hasErrors()) {
      return
    }

    try {
      await newUser({
        userName: name,
        password,
      })
      history("/")
    } catch (error) {
      setErrors({ generic: "Error inesperado" })
    }
  }

  function hasErrors(): boolean {
    if (errors.name || errors.password || errors.password2 || errors.generic)
      return true
    else
      return false
  }

  return (
    <GlobalContent>
      <FormTitle>Registrar Usuario</FormTitle>

      <Form>
        <FormInput
          label="Usuario"
          name="name"
          value={name}
          errorText={errors.name}
          onChange={(e) => setName(e.target.value)}
        />

        <FormPassword
          label="Password"
          name="password"
          value={password}
          errorText={errors.password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <FormPassword
          label="Repetir Password"
          name="password2"
          value={password2}
          errorText={errors.password2}
          onChange={(e) => setPassword2(e.target.value)}
        />

        <DangerLabel message={errors.generic} />

        <FormButtonBar>
          <FormAcceptButton label="Registrarse" onClick={registerClick} />
          <FormButton label="Cancelar" onClick={() => history("/")} />
        </FormButtonBar>
      </Form>
    </GlobalContent>
  )
}
