import styled from 'styled-components'

export const Profile = styled.div`
  padding-top: 100px;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  text-align: center;
  position: relative;
  padding-bottom: 4rem;

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    height: 1px;
    width: 300px;
    background-color: #f5f5f5;
    left: calc(50% - 150px)
  }
`

export const Image = styled.img`
  border-radius: 50%;
  width: 8rem;
  margin: 0 auto 30px;
`

export const Title = styled.h1`
  color: #000;
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.blue};

  background: -webkit-linear-gradient(right, #1d4e89, #00b2ca);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export const SubTitle = styled.h2`
  color: #000;
  font-weight: 100;
  margin-top: 2rem;
  font-weight: 100;
  font-size: 2rem;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.blue};

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
`

export const SocialLinks = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
`

export const SocialLink = styled.div`
  width: 3.4rem;
  height: 3.4rem;
  display: inline-flex;

  + div {
    margin-left: ${({ theme }) => theme.space.xs};
  }

  img {
    width: 100%;
  }
`
