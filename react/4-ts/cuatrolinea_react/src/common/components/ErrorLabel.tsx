import React from "react"

export default function ErrorLabel(props: { message: string | undefined }) {
  if (!props.message) {
    return null
  }

  return <div className="invalid-feedback">{props.message}</div>
}
