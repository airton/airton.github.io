import styled from 'styled-components'

export const Text = styled.span`
  position: relative;
  z-index: 2;
`

export const Btn = styled.a`
  border-radius: ${({ theme }) => theme.radius};
  background-color: ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.white};
  font-size: clamp(1.6rem, 5vw, 1.8rem);
  font-weight: 700;
  line-height: 1.5;
  padding: 1.7rem 3rem;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  text-decoration: none;
  display: inline-block;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.orange};
    transform: translateX(-100%);
    transition: transform .3s ease;
    z-index: 1;
  }

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.white};
    border-color: ${({ theme }) => theme.colors.orange};

    &:before {
      width: 100%;
      transform: translateX(0%);
    }
  }
`

export const BtnLarge = styled.a`
  background-color: ${({ theme }) => theme.colors.green};
  border-radius: ${({ theme }) => theme.radius};
  color: ${({ theme }) => theme.colors.white};
  font-size: clamp(1.8rem, 5vw, 2rem);
  font-weight: 700;
  line-height: 1.6;
  padding: 2rem 4rem;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  text-decoration: none;
  display: inline-block;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.orange};
    transform: translateX(-100%);
    transition: transform .3s ease;
    z-index: 1;
  }

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.white};
    border-color: ${({ theme }) => theme.colors.orange};

    &:before {
      width: 100%;
      transform: translateX(0%);
    }
  }
`
