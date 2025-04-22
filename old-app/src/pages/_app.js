import Navbar from 'components/Navbar'
import Footer from 'components/Footer'

import { ThemeProvider } from 'styled-components'
import { theme, GlobalStyle } from 'styles'

export default function MyApp({ Component, pageProps }) {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar/>
      <main className="main"><Component {...pageProps} /></main>
      <Footer/>
    </ThemeProvider>
  )
}
