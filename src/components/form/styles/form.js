import styled from "styled-components"

export const Container = styled.div`
background-image: url("/img/backgroundImg.png");
background-repeat: no-repeat;
padding: 60px;
`;
export const FormSubmit = styled.form`
display: flex;
flex-direction: row;
justify-content: space-between;
padding: 1rem;
background-color: white;
`;
export const Input = styled.input`
    padding: 10px;
    background-color: ghostwhite;
    border: none;
    border-radius: 10px;
    font-size: 18px;
`;
export const ButtonSubmit = styled.button`
    color: #fff;
    background-color: #1e86ff;
    transition: opacity .2s;
    border: none;
    padding: 1rem;
    border-radius: 10px;
    font-size: 18px;
`;