import React from "react"
import BSForm from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import InputGroup from 'react-bootstrap/InputGroup'

export default function FormInput(props: {
  label: string
  name: string
  errorText: string | undefined
  value?: string | undefined
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => any
}) {
  return (
    <BSForm.Group controlId={props.name} >
      <BSForm.Label >{props.label}</BSForm.Label>
      <InputGroup hasValidation>

        <BSForm.Control
          type="text"
          value={props.value}
          onChange={props.onChange}
          isValid={props.errorText === undefined}
        />
        <BSForm.Control.Feedback type="invalid">{props.errorText}</BSForm.Control.Feedback>
      </InputGroup>
    </BSForm.Group>
  )
}
