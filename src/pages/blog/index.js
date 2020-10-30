import Profile from 'components/Profile'
import Link from 'next/link'
import { Wrapper, List, ListItem, ListItemTitle, ListItemDate } from 'styles/pages/blog'
import { posts } from 'services/getAllPosts'

export default function Blog() {
  return (
    <>
      <Profile/>
      <Wrapper>
        <List>
          <Posts posts={posts} />
        </List>
      </Wrapper>
    </>
  )
}

const Posts = ({ posts }) => posts.map(({ link, module })=> (
  <ListItem key={module.meta.date}>
    <ListItemTitle>
      <Link prefetch href={link} passHref>{module.meta.title}</Link>
    </ListItemTitle>
    <ListItemDate>{module.meta.date}</ListItemDate>
  </ListItem>
))
