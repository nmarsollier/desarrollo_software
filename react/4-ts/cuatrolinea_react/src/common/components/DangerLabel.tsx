import React from "react"

export default function DangerLabel(props: { message: string | undefined }) {
  if (!props.message) {
    return null
  }
  return (
    <div className="alert alert-danger" role="alert">
      {props.message}
    </div>
  )
}
