import styled from 'styled-components'
import { Button } from 'components/Button'

export default function Custom404 () {
  return (
    <Wrapper>
      <Title>404 - Página não encontrada</Title>
      <Button href="/">Voltar para a homepage</Button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Logo = styled.img`
  display: block;
  margin: 0 auto 7rem;
  width: 100%;
  max-width: ${({ theme }) => theme.space.xl};
`

const Title = styled.h1`
  font-size: 3.2rem;
  margin: 0 0 3rem;

`

const BackButton = styled.a`
  font-weight: 600;
  font-size: 1.8rem;
  background-color: ${({ theme }) => theme.colors.green};
  padding: 2rem 3rem;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  border-radius: 3px;
  transition: background-color .25s ease;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.orange};
  }
`
