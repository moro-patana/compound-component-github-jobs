import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    html, body {
        font-family: 'Roboto', Helvetica, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: antialiased;
        background-color: ghostwhite;
        color: #333333;
        font-size: 16px;
        margin: 0;
        padding: 1rem;
    }
    a {
        text-decoration: none;
        cursor: pointer;
    }
    button {
        cursor: pointer;
    }
    li {
        list-style: none;
    }
    h1 {
    font-family: "Poppins",sans-serif;
    font-size: 2.4rem;
    line-height: 3.6rem;
    color: #282538;

    span {
        font-weight: 400;
    }
    }
    @media (min-width: 1114px) {
    .container {
        display: grid;
        grid-template-columns: 20% 77%;
        column-gap: 50px;
        padding-top: 40px;
        max-width: 1114px;
        margin: 0 auto;
    }
    h1 {
        max-width: 1114px;
        margin: 0 auto;
        padding: 20px;
    }
    }
`;
