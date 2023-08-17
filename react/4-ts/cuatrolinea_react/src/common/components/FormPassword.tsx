import React from "react"
import * as ErrorClass from "./ErrorClass"
import ErrorLabel from "./ErrorLabel"

export default function FormPassword(props: {
  label: string
  name: string
  errorText: string | undefined
  value?: string | undefined
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => any
}) {
  return (
    <div className="form-group">
      <label>{props.label}</label>
      <input
        id={props.name}
        type="password"
        value={props.value}
        onChange={props.onChange}
        className={ErrorClass.getErrorClass(props.errorText, "form-control")}
      ></input>
      <ErrorLabel message={props.errorText} />
    </div>
  )
}
