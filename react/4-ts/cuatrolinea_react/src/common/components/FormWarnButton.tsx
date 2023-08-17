import React from "react"

export default function FormWarnButton(props: {
  label: string
  hidden: boolean
  onClick: () => any
}) {
  return (
    <button
      hidden={props.hidden}
      className="btn btn-warning"
      onClick={props.onClick}
    >
      {props.label}
    </button>
  )
}
