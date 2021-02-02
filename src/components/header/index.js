import React from 'react'
import { Container, Frame, Form, Input, SubmitButton} from "./styles/header"

export default function Header({children, ...restProps}) {
    return (
        <Container {...restProps}>
            {children}
        </Container>
    )
}
Header.Frame = function HeaderFrame({children, ...restProps}) {
    return <Frame {...restProps}>{children}</Frame>
} 
Header.Form = function HeaderForm({children, ...restProps}) {
    return <Form {...restProps}>{children}</Form>
} 
Header.Input = function HeaderInput({children, ...restProps}) {
    return <Input {...restProps}>{children}</Input>
} 
Header.SubmitButton = function HeaderSubmitButton({children, ...restProps}) {
    return <SubmitButton {...restProps}>{children}</SubmitButton>
} 