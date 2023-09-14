import React from "react"
import { RouteProps } from "react-router-dom"

export default function Form(props: RouteProps) {
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            {props.children}
        </form >
    )
}