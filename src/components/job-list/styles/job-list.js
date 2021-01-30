import styled from "styled-components"

export const Container = styled.article`
    padding: 1rem;
    display: grid;
    grid-template-columns: 20% 70%;
    column-gap: 30px;
    background: #fff;
    box-shadow: 0 2px 4px rgb(0 0 0 / 5%);
    border-radius: 4px;
    margin-bottom: 30px;
`;
export const History = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`;
export const Title = styled.h2`
font-size: 20px;
`;
export const SubTitle = styled.h3`
     margin: 0;
    font-size: 20px;
`;
export const Button = styled.button`
 border: 1px solid black;
 padding: 1rem;
 background-color: transparent;
`;
export const Span = styled.span`
padding: 20px;
`;
export const Image = styled.img`
width: 100%;
`;