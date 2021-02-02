import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("/img/backgroundImg.png");
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: cover;
    border-radius: 8px;
    height: 138px;
    margin: 32px auto 0;
    padding: 0 18px;

    @media (min-width: 1114px) {
        max-width: 1114px;
        margin: 0 auto;
    }
`;
export const Form = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-grow: 1;
    padding: 14px 5px 14px 17px;
    height: 48px;
    background-color: #fff;
    border-radius: 4px;
    max-width: 790px;
`;
// export const Form = styled.form``;
export const Input = styled.input`
    margin-left: 10px;
    margin-right: 24px;
    padding: 0 4px;
    height: 32px;
    border: none;
    background: transparent;

    &:focus {
        border: 2px solid blue;
    }
    &::placeholder {
        font-size: 1.2rem;
        line-height: 1.4rem;
        color: #b9bdcf;
    }
`;
export const SubmitButton = styled.button`
    color: #fff;
    background-color: #1e86ff;
    transition: opacity .2s;
    padding: 14px 27px;
    outline: none;
    border: none;
    border-radius: 4px;
    font-size: 1.6rem;
    line-height: 1.9rem;

`;
