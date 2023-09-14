import React from "react"
import ErrorLabel from "./ErrorLabel"

export default function FormInput(props: {
  label: string
  name: string
  errorText: string | undefined
  value?: string | undefined
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => any
}) {
  const errorStyle = props.errorText ? "is-invalid" : ""

  return (
    <div className="form-group">
      <label>{props.label}</label>
      <input
        id={props.name}
        type="text"
        value={props.value}
        onChange={props.onChange}
        className={`${errorStyle} form-control`}
      ></input>
      <ErrorLabel message={props.errorText} />
    </div>
  )
}
