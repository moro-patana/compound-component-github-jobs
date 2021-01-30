import React from "react"
import {
    Container,
    Title,
    SubTitle,
    Button,
    Location,
    Image, 
    Date,
    History
} from "./styles/job-list"

export default function JobList({children, ...restProps}) {
    return (
        <Container {...restProps}>
            {children}
        </Container>
    )
}
JobList.Title = function JobListTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};
JobList.SubTitle = function JobListSubTitle({ children, ...restProps }) {
	return <SubTitle {...restProps}>{children}</SubTitle>;
};
JobList.Button = function JobListButton({ children, ...restProps }) {
	return <Button {...restProps}>{children}</Button>;
};
JobList.Location = function JobListLocation({ children, ...restProps }) {
	return <Location {...restProps}>{children}</Location>;
};
JobList.Image = function JobListImage({...restProps }) {
	return <Image {...restProps}/>;
};
JobList.Date = function JobListDate({ children, ...restProps }) {
	return <Date {...restProps}>{children}</Date>;
};
JobList.History = function JobListHistory({ children, ...restProps }) {
	return <History {...restProps}>{children}</History>;
};
