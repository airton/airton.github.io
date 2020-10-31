import Link from 'next/link'
import { useRouter } from 'next/router'
import { NavBar } from './styles'

const pages = {
  'home': 'home',
  'projetos': 'projects',
  'blog': 'blog'
}

export default function Navbar(){

  const router = useRouter()
  const pageName = router.pathname === '/' ? '/home' : router.pathname
  const paths = pageName.split('/')

  const isHome = paths.includes('home')
  const isProjects = paths.includes('projetos')
  const isBlog = paths.includes('blog')

  return (
    <NavBar>
      <Link href='/' passHref>
        <a className={isHome ? 'active' : '' }>Home</a>
      </Link>
      <Link href='/projetos/' passHref>
        <a className={isProjects ? 'active' : '' }>Projetos</a>
      </Link>
      <Link href='/blog/' passHref>
        <a className={isBlog ? 'active' : '' }>Blog</a>
      </Link>
      <Link href='#' passHref>
        <a>Cursos <sup>Em breve</sup></a>
      </Link>
    </NavBar>
  )
}

