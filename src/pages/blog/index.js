import Profile from 'components/Profile'
import Link from 'next/link'
import { Wrapper, List, ListItem, ListItemTitle, ListItemDate } from 'styles/pages/blog'
import { posts } from 'services/getAllPosts'
import { dateFormat } from 'helpers'

export default function Blog() {
  return (
    <>
      <Profile/>
      <Wrapper>
        <List>
          <Posts posts={sortedPosts(posts)} />
        </List>
      </Wrapper>
    </>
  )
}

// var options = { year: 'numeric', month: 'long', day: 'numeric' };

const Posts = ({ posts }) => posts.map(({ link, module, date })=> (
  <ListItem key={date}>
    <ListItemTitle>
      <Link href={link} passHref>{module.meta.title}</Link>
    </ListItemTitle>
    <ListItemDate>{dateFormat(date)}</ListItemDate>
  </ListItem>
))

const sortedPosts = posts => posts.sort((a, b) => b.date - a.date)
