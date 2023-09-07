import React from "react"
import BSButton from 'react-bootstrap/Button'

export default function FormAcceptButton(props: {
  label: string
  onClick: () => any
}) {
  return (
    <BSButton variant="primary" onClick={props.onClick}>
      {props.label}
    </BSButton>
  )
}
