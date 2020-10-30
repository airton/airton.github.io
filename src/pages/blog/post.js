import { Wrapper, Article, Title, Date } from 'styles/pages/post'
import Prism from 'prismjs'
import { useEffect } from 'react'

export default function BlogPost({ children, meta }) {

  useEffect(()=> {
    Prism.highlightAll()
  }, [])

  return (
    <div className="post">
      <Wrapper>
        <Article>
          <Title>{meta.title}</Title>
          <Date>{meta.date}</Date>
          <img src={meta.image} alt=""/>
          {children}
        </Article>
      </Wrapper>

    </div>
  )
}
