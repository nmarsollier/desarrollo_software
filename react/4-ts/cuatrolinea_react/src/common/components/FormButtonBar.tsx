import React from "react"
import { RouteProps } from "react-router-dom"
import BSStack from 'react-bootstrap/Stack'

export default function FormButtonBar(props: RouteProps) {
    return (
        <BSStack gap={2} direction="horizontal" className="mx-auto">
            {props.children}
        </BSStack >
    )
}