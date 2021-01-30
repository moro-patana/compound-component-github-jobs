import React from 'react'
import { Container,FormSubmit,  Input, ButtonSubmit} from "./styles/form"
export default function Form({children, ...restProps}) {
    return (
        <Container {...restProps}>
            {children}
        </Container>
    )
}
Form.FormSubmit = function FormFormSubmit({children, ...restProps}) {
    return <FormSubmit {...restProps}></FormSubmit>
}
Form.Input = function FormInput({children, ...restProps}) {
    return <Input {...restProps}></Input>
}
Form.ButtonSubmit = function FormButtonSubmit({children, ...restProps}) {
    return <ButtonSubmit {...restProps}>{children}</ButtonSubmit>
}

