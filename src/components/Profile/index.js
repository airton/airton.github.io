import { Profile, Image, Title, SubTitle, SocialLinks, SocialLink } from './styles'

export default function ProfileComponent() {
  return (
    <Profile>
      <Image src="https://www.gravatar.com/avatar/168bb3faf63cd0d91b8732eecfaed4bc.svg?s=80" />
      <Title>Airton Vancin Junior</Title>
      <SubTitle>Front End Developer na empresa <a href="https://www.redventures.com">Red Ventures</a></SubTitle>

      <SocialLinks>
        <SocialLink>
          <a href={'https://twitter.com/airtonvancin'} target="_blank">
            <img src={'./twitter.svg'} alt={'Twitter'}/>
          </a>
        </SocialLink>
        <SocialLink>
          <a href={'https://github.com/airton'} target="_blank">
            <img src={'./github.svg'} alt={'Github'}/>
          </a>
        </SocialLink>
        <SocialLink>
          <a href={'http://wordpress.org/support/profile/airtonvancin'} target="_blank">
            <img src={'./wordpress.svg'} alt={'WordPress'}/>
          </a>
        </SocialLink>
      </SocialLinks>

    </Profile>
  )
}
