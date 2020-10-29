import Profile from 'components/Profile'
import Link from 'next/link'
import { Wrapper, List, ListItem, ListItemTitle, ListItemDate } from 'styles/pages/blog'

export default function Blog() {
  return (
    <div className="blog">
      <Profile/>

      <Wrapper>
        <List>
          <ListItem>
            <ListItemTitle>
              <Link prefetch href='/' passHref>Efeito paralax com css puro </Link>
            </ListItemTitle>
            <ListItemDate>20 Set 2020</ListItemDate>
          </ListItem>
          <ListItem>
            <ListItemTitle><Link prefetch href='/' passHref>JavaScript - ES6: let, const, arrow function</Link></ListItemTitle>
            <ListItemDate>05 Out 2020</ListItemDate>
          </ListItem>
          <ListItem>
            <ListItemTitle><Link prefetch href='/' passHref>Efeito paralax com css puro</Link></ListItemTitle>
            <ListItemDate>20 Set 2020</ListItemDate>
          </ListItem>
          <ListItem>
            <ListItemTitle><Link prefetch href='/' passHref>JavaScript - ES6: let, const, arrow function</Link></ListItemTitle>
            <ListItemDate>01 Nov 2020</ListItemDate>
          </ListItem>
        </List>
      </Wrapper>

    </div>
  )
}
