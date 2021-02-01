import React from 'react'
import { Container, SearchCityInput, Checkbox, Label, Fieldset} from "./styles/form-sidebar"

export default function FormSidebar({children, ...restProps}) {
    return (
        <Container {...restProps}>
            {children}
        </Container>
    )
}
FormSidebar.SearchCityInput = function FormSidebarSearchCityInput({children, ...restProps}) {
    return <SearchCityInput {...restProps}>{children}</SearchCityInput>
}
FormSidebar.Fieldset = function FormSidebarFieldset({children, ...restProps}) {
    return <Fieldset {...restProps}>{children}</Fieldset>
}
FormSidebar.Checkbox = function FormSidebarCheckbox({children, ...restProps}) {
    return <Checkbox {...restProps}>{children}</Checkbox>
}
FormSidebar.Label = function FormSidebarLabel({children, ...restProps}) {
    return <Label {...restProps}>{children}</Label>
}
