import Head from 'next/head'
import ThirdParty from 'helpers/thirdparty'
import { useRouter } from 'next/router'

export default function HeadComponent ({ meta }) {

  const { pathname } = useRouter()
  const title = meta ? `${meta.title} - AirtonVancin.com` : 'AirtonVancin.com'
  const desc = meta?.description || 'A Brazilian web developer, graduate in information systems'
  const name = 'Airton Vancin Junior'
  const url = 'https://airtonvancin.com'

  return (
    <Head>
      <title>{title}</title>
      <meta name='viewport' content='width=device-width,initial-scale=1' />

      <meta name='description' content={desc} />
      <meta name='msapplication-TileColor' content='#00b2ca' />
      <meta name='msapplication-TileImage' content='/ms-icon-144x144.png' />
      <meta name='theme-color' content='#00b2ca' />
      <meta name='application-name' content={name} />
      <link rel="canonical" href={pathname}></link>

      <meta property="fb:app_id" content="1509171469355605" />
      <meta property='og:url' content={url} />
      <meta property='og:type' content='website' />
      <meta property='og:title' content={title} />
      <meta property='og:image' content='/perfil.jpeg' />
      <meta property='og:image:alt' content={name} />
      <meta property='og:description' content={desc} />
      <meta property='og:locale' content='pt_BR' />

      <meta name='twitter:card' content='summary' />
      <meta name='twitter:site' content='@airtonvancin' />
      <meta name='twitter:url' content={url} />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={desc} />
      <meta name='twitter:image' content='/perfil.jpeg' />
      <meta name='twitter:image:alt' content={name} />

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
      <link href="https://fonts.googleapis.com/css2?family=Commissioner:wght@100;400;600;700&display=swap" rel="stylesheet"/>

      {ThirdParty()}
    </Head>
  )
}
