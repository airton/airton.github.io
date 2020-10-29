import Head from 'next/head'

// export default HeadComponent = () => {
export default function HeadComponent () {

  return (
    <Head>
      <title>AirtonVancin.com</title>
      <meta name='viewport' content='width=device-width,initial-scale=1' />

      <meta name='description' content='Saiba Mais...' />
      <meta name='msapplication-TileColor' content='#06092c' />
      <meta name='msapplication-TileImage' content='/ms-icon-144x144.png' />
      <meta name='theme-color' content='#06092c' />
      <meta name='application-name' content='Airton Vancin Junior' />

      <meta property='og:url' content='https://airtonvancin.com' />
      <meta property='og:type' content='website' />
      <meta property='og:title' content='Airton Vancin Junior' />
      <meta property='og:image' content='https://airtonvancin.com/' />
      <meta property='og:image:alt' content='' />
      <meta property='og:description' content='Saiba Mais...' />
      <meta property='og:locale' content='pt_BR' />

      <meta name='twitter:card' content='summary' />
      <meta name='twitter:site' content='@airtonvancin' />
      <meta name='twitter:url' content='https://airtonvancin.com/' />
      <meta name='twitter:title' content='Airton Vancin Junior' />
      <meta name='twitter:description' content='Saiba Mais...' />
      <meta name='twitter:image' content='https://airtonvancin.com/' />
      <meta name='twitter:image:alt' content='' />

      <link rel='apple-touch-icon' sizes='76x76' href='/apple-icon-76x76.png' />
      <link rel='apple-touch-icon' sizes='120x120' href='/apple-icon-120x120.png' />
      <link rel='apple-touch-icon' sizes='152x152' href='/apple-icon-152x152.png' />
      <link rel='apple-touch-icon' sizes='180x180' href='/apple-icon-180x180.png' />

      <link rel='icon' type='image/png' sizes='192x192' href='/android-icon-192x192.png' />
      <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
      <link rel='icon' type='image/png' sizes='96x96' href='/favicon-96x96.png' />
      <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
      <link rel='manifest' href='/manifest.json' />

      <link rel='icon' href='/favicon.ico' />
      <link href="https://fonts.googleapis.com/css2?family=Commissioner:wght@100;600;700&display=swap" rel="stylesheet"/>
    </Head>
  )
}
