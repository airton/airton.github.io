import { createGlobalStyle } from "styled-components";
import { normalize } from 'styled-normalize'

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  :focus {
    outline-color: ${({ theme }) => theme.colors.text};
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 1rem;
    margin: 0;
    padding: 0;
    cursor: default;
    font-family: 'Commissioner', sans-serif;
    /* font-family: 'Work Sans', sans-serif; */
    font-variant-ligatures: none;
    color: #000;
    background: #fff;
  }

  h1, h2, h3,
  h4, h5, h6,
  p {
    margin: 0;
    font-weight: 700;
  }

  p {
    font-weight: 600;
  }

  a {
    color: ${({ theme }) => theme.colors.blue}
  }
`
