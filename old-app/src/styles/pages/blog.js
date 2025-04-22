import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 800px;
  padding: 0 16px;
`

export const List = styled.ul`
  padding: 0;
  margin: 60px 0;
`

export const ListItem = styled.li`
  padding: 25px 0;
  display: flex;
  line-height: 2.4rem;
  justify-content: space-between;
  position: relative;

  + li {
    border-top: 1px solid #f1f1f1;
  }

  a {
    text-decoration: none;

    &:before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
    }

  }

  &:hover,
  &:focus {
    background: -webkit-linear-gradient(right, #1d4e89, #00b2ca);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

export const ListItemTitle = styled.h2`
  font-size: 2.4rem;
  display: inline-block;
`

export const ListItemDate = styled.span`
  font-size: 1.8rem;
  text-align: right;
`
