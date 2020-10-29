import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: 50px auto 0;
  max-width: 800px;
  padding: 0 16px;
`

export const Article = styled.article`
  /* border: 1px solid red; */

  > h2 {
    margin-bottom: 3rem;
    font-size: 3.2rem;
    line-height: 4.2rem;
  }

  > p {
    font-size: 1.8rem;
    line-height: 2.8rem;
    font-weight: 400;
    margin-bottom: 3rem;

    code {
      padding: 2px 4px;
      color: #c7254e;
      background-color: #f9f2f4;
      border-radius: 4px;
    }
  }

  pre {
    margin-bottom: 3rem;
  }
`

export const Title = styled.h1`
  font-size: 4.2rem;
  line-height: 5.2rem;
  margin-bottom: 2rem;
  text-align: center;
`

export const Date = styled.span`
  font-size: 1.6rem;
  line-height: 1.6rem;
  font-weight: 100;
  text-align: center;
  text-transform: uppercase;
  display: block;
  margin-bottom: 40px;
`
