import { Profile, Image, Title, SubTitle, SocialLinks, SocialLink } from 'styles/pages/home'

export default function Home() {
  return (
    <div className="home">
      <Profile>
        <Image src="https://www.gravatar.com/avatar/168bb3faf63cd0d91b8732eecfaed4bc.svg?s=80" />
        <Title>Airton Vancin Junior</Title>
        <SubTitle>Front End Developer na empresa <a href="https://www.redventues.com">Red Ventures</a></SubTitle>

        <SocialLinks>
          <SocialLink>
            <a href={'https://twitter.com/airtonvancin'}><img src={'./twitter.svg'} alt={'Twitter'}/></a>
          </SocialLink>
          <SocialLink>
            <a href={'https://github.com/airton'}><img src={'./github.svg'} alt={'Github'}/></a>
          </SocialLink>
          <SocialLink>
            <a href={'http://wordpress.org/support/profile/airtonvancin'}><img src={'./wordpress.svg'} alt={'WordPress'}/></a>
          </SocialLink>
        </SocialLinks>

      </Profile>
    </div>
  )
}
