import React from "react"
import {
    Container,
    Frame,
    Title,
    SubTitle,
    Button,
    Image, 
    Span,
    History
} from "./styles/job-list"

export default function JobList({children, ...restProps}) {
    return (
        <Container {...restProps}>
            {children}
        </Container>
    )
}
JobList.Frame = function JobListFrame({ children, ...restProps }) {
	return <Frame {...restProps}>{children}</Frame>;
};
JobList.Title = function JobListTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};
JobList.SubTitle = function JobListSubTitle({ children, ...restProps }) {
	return <SubTitle {...restProps}>{children}</SubTitle>;
};
JobList.Button = function JobListButton({ children, ...restProps }) {
	return <Button {...restProps}>{children}</Button>;
};

JobList.Image = function JobListImage({...restProps }) {
	return <Image {...restProps}/>;
};
JobList.Span = function JobListSpan({ children, ...restProps }) {
	return <Span {...restProps}>{children}</Span>;
};
JobList.History = function JobListHistory({ children, ...restProps }) {
	return <History {...restProps}>{children}</History>;
};
