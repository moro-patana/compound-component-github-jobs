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
    }
    li {
        list-style: none;
    }
`;
