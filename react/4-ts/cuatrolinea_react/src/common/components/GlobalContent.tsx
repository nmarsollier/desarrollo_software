import React from "react"
import { RouteProps } from "react-router-dom"

export default function GlobalContent(props: RouteProps) {
    return (
        <div className="global_content">
            {props.children}
        </div >
    )
}