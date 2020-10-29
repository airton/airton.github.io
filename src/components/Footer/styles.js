import styled from "styled-components"

export const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 2rem 0;
  flex-wrap: wrap;
  text-align: center;

  p {
    font-size: 1.6rem;
    font-weight: 100;
    flex-basis: 100%;
  }

  p + p {
    margin-top: 10px;
    font-size: 1rem;
  }
`
