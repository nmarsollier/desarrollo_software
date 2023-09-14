import React from "react"

export default function FormAcceptButton(props: {
  label: string
  onClick: () => any
}) {
  return (
    <button className="btn btn-primary" onClick={props.onClick}>
      {props.label}
    </button>
  )
}
