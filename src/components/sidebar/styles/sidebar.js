import styled from "styled-components"

export const Container = styled.div``;
export const Location = styled.div`
margin: 0;
padding: 0;
display: flex;
flex-direction: column;

  label {
    display: block;
    font-size: 1.4rem;
    text-transform: uppercase;
    line-height: 2.1rem;
    font-weight: 700;
    color: #b9bdcf;
    margin-top: 32px;
    margin-bottom: 14px;
  }
  form {
    display: flex;
    align-items: center;
    flex-grow: 1;
    padding: 4px 5px 4px 17px;
    height: 48px;
    background-color: #fff;
    border-radius: 4px;
    max-width: 790px;
  }
  input {
    font-family: "Roboto",sans-serif;
    margin-left: 10px;
    margin-right: 24px;
    padding: 0 4px;
    height: 32px;
    border: none;
    background: transparent;
    font-size: 1.2rem;
    line-height: 1.4rem;
    color: #b9bdcf;
  }
  img {
      width: 24px;
      height: 24px;
  }
`;
export const SelectCityInput = styled.div`
margin-top: 25px;
  div {
    display: flex;
    align-items: center;
    margin: 8px 0;
  }
  input {
    width: 18px;
    height: 18px;
    margin-right: 12px;
  }
  label {
    font-family: "Poppins",sans-serif;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 2.1rem;
    color: #334680;
  }
`;
export const FullTimeJobInput = styled.fieldset`
    display: flex;
    align-items: center;
    margin: 8px 0;
    border: none;
    padding-left: 0;

    input {
        width: 18px;
        height: 18px;
        margin-right: 12px;
    }
    label {
        font-family: "Poppins",sans-serif;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 2.1rem;
    color: #334680;
    }
`;