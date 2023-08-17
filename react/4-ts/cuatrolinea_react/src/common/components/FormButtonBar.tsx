import React from "react"
import { RouteProps } from "react-router-dom"

export default function FormButtonBar(props: RouteProps) {
    return (
        <div className="btn-group ">
            {props.children}
        </div >
    )
}