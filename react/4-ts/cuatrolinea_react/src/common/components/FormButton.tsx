import React from "react"
import BSButton from 'react-bootstrap/Button'

export default function FormButton(props: {
  label: string
  onClick: () => any
}) {
  return (
    <BSButton variant="secondary" onClick={props.onClick}>
      {props.label}
    </BSButton>
  )
}
