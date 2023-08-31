import React from "react"
import BSForm from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'

export default function FormPassword(props: {
  label: string
  name: string
  errorText: string | undefined
  value?: string | undefined
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => any
}) {
  return (
    <FloatingLabel controlId={props.name} label={props.label}>
      <BSForm.Control
        type="password"
        value={props.value}
        onChange={props.onChange}
      />
      <BSForm.Control.Feedback type="invalid">{props.errorText}</BSForm.Control.Feedback>
    </FloatingLabel>
  )
}
