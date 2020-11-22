import { Wrapper, Article, Header, Title, Desc, Date, ReadingTime } from 'styles/pages/post'
import Disqus from 'components/Disqus'
import HeadComponent from 'components/Head'
import Prism from 'prismjs'
import { useEffect } from 'react'
import { dateFormat } from 'helpers'

export default function BlogPost({ children, meta }) {

  useEffect(()=> {
    Prism.highlightAll()
  }, [])

  return (
    <div className="post">
      <HeadComponent meta={meta}/>
      <Wrapper>
        <Article>
          <Header>
            <Title>{meta.title}</Title>
            <Desc>{meta.description}</Desc>
            <Date>{dateFormat(meta.date)}</Date>
            <ReadingTime>Tempo de leitura {meta.readTime} min</ReadingTime>
          </Header>
          <img src={meta.image} alt=""/>
          {children}
        </Article>
      </Wrapper>
      <Disqus/>
    </div>
  )
}
