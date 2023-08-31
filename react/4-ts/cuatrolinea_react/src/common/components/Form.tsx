import React from "react"
import BSForm from 'react-bootstrap/Form'
import BSStack from 'react-bootstrap/Stack'

export default function Form(props: {
    children?: React.ReactNode
}) {
    return (
        <BSForm onSubmit={(e) => e.preventDefault()} noValidate>
            <BSStack gap={2} direction="vertical">
                {props.children}
            </BSStack>
        </BSForm >
    )
}
