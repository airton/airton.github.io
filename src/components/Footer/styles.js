import styled from "styled-components"

export const Footer = styled.footer`
  width: 100%;
  padding: 2rem 0;
  flex-wrap: wrap;
  text-align: center;
  height: 100px;

  p {
    font-size: 1.6rem;
    font-weight: 100;
    width: 100%;
    display: block;
  }

  p + p {
    margin-top: 10px;
    font-size: 1rem;
  }
`
