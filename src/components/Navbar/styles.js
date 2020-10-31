import styled from 'styled-components'
import { theme } from 'styles'

export const NavBar = styled.nav`
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  font-size: 1.4rem;
  font-weight: 100;
  padding-top: 1rem;

  a {
    padding: 1rem 0.2rem;
    margin: 0 0.8rem;
    text-decoration: none;

    &:hover,
    &:focus {
      outline: none;

    }

    &.active {
      border-bottom: 1px solid ${({ theme }) => theme.colors.blueLigth};
      font-weight: 700;
    }
  }

  sup {
    color: ${({ theme }) => theme.colors.orange};
    font-weight: 700;
  }
`
