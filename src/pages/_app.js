import Navbar from 'components/Navbar'
import Footer from 'components/Footer'
import HeadComponent from 'components/Head'

import { ThemeProvider } from 'styled-components'
import { theme, GlobalStyle } from 'styles'

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <HeadComponent/>
      <GlobalStyle />
      <Navbar/>
      <main className="main"><Component {...pageProps} /></main>
      <Footer/>
    </ThemeProvider>
  )
}
