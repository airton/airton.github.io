import { Wrapper, Article, Title, Date } from 'styles/pages/post'

export default function BlogPost({ children, meta }) {

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
