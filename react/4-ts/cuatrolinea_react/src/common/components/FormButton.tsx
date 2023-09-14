import React from "react"

export default function FormButton(props: {
  label: string
  onClick: () => any
}) {
  return (
    <button className="btn btn-light" onClick={props.onClick}>
      {props.label}
    </button>
  )
}
