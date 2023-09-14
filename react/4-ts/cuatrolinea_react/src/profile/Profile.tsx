import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import DangerLabel from "../common/components/DangerLabel"
import { getErrorClass } from "../common/components/ErrorClass"
import ErrorLabel from "../common/components/ErrorLabel"
import Form from "../common/components/Form"
import FormAcceptButton from "../common/components/FormAcceptButton"
import FormButton from "../common/components/FormButton"
import FormButtonBar from "../common/components/FormButtonBar"
import FormImageUpload from "../common/components/FormImageUpload"
import FormInput from "../common/components/FormInput"
import FormTitle from "../common/components/FormTitle"
import GlobalContent from "../common/components/GlobalContent"
import { Province, getProvinces } from "../provinces/model/getProvincesService"
import "../styles.css"
import { getCurrentProfile } from "./model/getCurrentProfileService"
import { updateProfile, } from "./model/updateProfileService"

interface ScreenErrors {
  address?: string | undefined,
  email?: string | undefined,
  name?: string | undefined,
  phone?: string | undefined,
  provinceId?: string | undefined,
  picture?: string | undefined,
  generic?: string | undefined,
}

export default function Profile() {
  const history = useNavigate()
  const [errors, setErrors] = useState<ScreenErrors>({})
  const [address, setAddress] = useState("")
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [picture, setPicture] = useState("")
  const [provinceId, setProvinceId] = useState("")
  const [provinces, setProvinces] = useState<Province[]>([])

  const loadProvinces = async () => {
    try {
      const result = await getProvinces()
      setProvinces(result)
    } catch (error) {
      setErrors({ generic: "Error inesperado" })
    }
  }

  const loadProfile = async () => {
    try {
      const result = await getCurrentProfile()

      if (!result) return
      setAddress(result.address)
      setEmail(result.email)
      setName(result.name)
      setPhone(result.phone)
      setPicture(result.picture)
      setProvinceId(result.provinceId)
    } catch (error) {
      setErrors({ generic: "Error inesperado" })
    }
  }

  const updateClick = async () => {
    const err: ScreenErrors = {}
    if (!name) {
      err.name = "No puede esta vacío"
    }
    if (!email) {
      err.email = "No puede esta vacío"
    }
    setErrors(err)
    if (hasErrors()) {
      return
    }

    try {
      await updateProfile({
        address,
        email,
        name,
        phone,
        provinceId,
        picture
      })
      history("/")
    } catch (error) {
      setErrors({ generic: "Error inesperado" })
    }
  }

  useEffect(() => {
    void loadProvinces()
    void loadProfile()
  }, [])

  function hasErrors(): boolean {
    if (errors.address || errors.email || errors.name || errors.phone || errors.provinceId || errors.picture || errors.generic)
      return true
    else
      return false
  }

  return (
    <GlobalContent>
      <FormTitle>Actualizar Perfil</FormTitle>

      <Form>
        <FormInput
          label="Nombre"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          errorText={errors.name}
        />

        <FormImageUpload
          picture={picture}
          name="image"
          errorText={errors.picture}
          onImageChanged={setPicture}
        />

        <FormInput
          label="Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          errorText={errors.email}
        />

        <div className="form-group">
          <label>Provincia</label>
          <select
            value={provinceId}
            onChange={(e) => setProvinceId(e.target.value)}
            className={getErrorClass(errors.provinceId, "form-control")}
          >
            {provinces.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </select>
          <ErrorLabel message={errors.provinceId} />
        </div>

        <FormInput
          label="Dirección"
          name="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          errorText={errors.address}
        />

        <FormInput
          label="Teléfono"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          errorText={errors.phone}
        />

        <DangerLabel message={errors.generic} />

        <FormButtonBar>
          <FormAcceptButton label="Actualizar" onClick={updateClick} />
          <FormButton label="Cancelar" onClick={() => history("/")} />
        </FormButtonBar>
      </Form>
    </GlobalContent>
  )
}
