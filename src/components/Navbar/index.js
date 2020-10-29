import loadCustomRoutes from 'next/dist/lib/load-custom-routes';
import Link from 'next/link'
import { useRouter } from "next/router";
import { NavBar } from './styles'

export default function Navbar(){

  const router = useRouter()

  return (
    <NavBar>
      <Link prefetch href='/' passHref>
        <a className={router.pathname == '/' ? 'active' : '' }>Home</a>
      </Link>
      <Link prefetch href='/projetos/' passHref>
        <a className={router.pathname == '/projetos' ? 'active' : '' }>Projetos</a>
      </Link>
      <Link prefetch href='/blog/' passHref>
        <a className={router.pathname == '/blog' || router.pathname == '/blog/[slug]' ? 'active' : '' }>Blog</a>
      </Link>
    </NavBar>
  )
}

