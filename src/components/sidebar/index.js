import React from 'react'
import { Container, FullTimeJobInput, Location, SelectCityInput} from "./styles/sidebar"

export default function SideBar({children, ...restProps}) {
    return (
        <Container {...restProps}>
            {children}
        </Container>
    )
}
SideBar.FullTimeJobInput = function SideBarFullTimeJobInput({children, ...restProps}) {
    return <FullTimeJobInput {...restProps}>{children}</FullTimeJobInput>
}
SideBar.Location = function SideBarLocation({children, ...restProps}) {
    return <Location {...restProps}>{children}</Location>
}

SideBar.SelectCityInput = function SideBarSelectCityInput({children, ...restProps}) {
    return <SelectCityInput {...restProps}>{children}</SelectCityInput>
}

