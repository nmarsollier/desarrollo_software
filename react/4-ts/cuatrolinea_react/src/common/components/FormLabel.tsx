import React from "react"

export default function FormLabel(props: {
  label: string
  text: string | undefined
}) {
  let value = props.text
  if (!value) {
    value = ""
  }

  return (
    <div className="form-group">
      <label>{props.label}</label>
      <input className="form-control" id="login" value={props.text} disabled />
    </div>
  )
}
