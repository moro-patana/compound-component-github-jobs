import React from 'react'
import {
    Container,
    Title,
    Frame,
    SubTitle,
    Image,
    Link,
    Heading,
    Span,
    Button,
    LogoFrame,
    TitleFrame,
} from "./styles/job-details"

export default function JobDetails({children, ...restProps}) {
    return (
        <Container {...restProps}>
            {children}
        </Container>
    )
}
JobDetails.Frame = function JobDetailsFrame({children, ...restProps}) {
    return <Frame {...restProps}>{children}</Frame>
}
JobDetails.Link = function JobDetailsLink({children, ...restProps}) {
    return <Link {...restProps}>{children}</Link>
}
JobDetails.Heading = function JobDetailsHeading({children, ...restProps}) {
    return <Heading {...restProps}>{children}</Heading>
}
JobDetails.SubTitle = function JobDetailsSubTitle({children, ...restProps}) {
    return <SubTitle {...restProps}>{children}</SubTitle>
}
JobDetails.Title = function JobDetailsTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}
JobDetails.Button = function JobDetailsButton({children, ...restProps}) {
    return <Button {...restProps}>{children}</Button>
}
JobDetails.Span = function JobDetailsSpan({children, ...restProps}) {
    return <Span {...restProps}>{children}</Span>
}
JobDetails.Image = function JobDetailsImage({...restProps}) {
    return <Image {...restProps}/>
}
JobDetails.LogoFrame = function JobDetailsLogoFrame({children, ...restProps}) {
    return <LogoFrame {...restProps}>{children}</LogoFrame>
}
JobDetails.TitleFrame = function JobDetailsTitleFrame({children, ...restProps}) {
    return <TitleFrame {...restProps}>{children}</TitleFrame>
}
