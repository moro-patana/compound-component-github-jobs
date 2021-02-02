import styled from "styled-components"
export const Container = styled.div`

`;
export const Frame = styled.div`
    display: grid;
    grid-template-columns: 20% 70%;
    column-gap: 30px;
    align-items: center;
    padding: 12px;
    background: #fff;
    box-shadow: 0 2px 4px rgb(0 0 0 / 5%);
    border-radius: 4px;
    text-decoration: none;
    margin-bottom: 24px;
    transition: box-shadow .2s;
`;
export const Title = styled.h2`
    font-size: 18px;
    color: #334680;
`;
export const SubTitle= styled.h3`
font-size: 24px;
    color: #334680;
`;
export const Button = styled.button`
padding: 8px;
color: #334680;
font-size: 16px;
`;
export const Image = styled.img`
width: 100%;
`;
export const Span = styled.span`
color: #b9bdcf;
font-size: 16px;
`;
export const History = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`;