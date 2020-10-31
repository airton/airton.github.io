import { DiscussionEmbed } from 'disqus-react'
import styled from 'styled-components'

export default function Disqus() {

  return (
    <DisqusWrapper>
      <DiscussionEmbed
        shortname='airtonvancin'
        config={
          {
            // url: '',
            // identifier: '',
            // title: '',
            language: 'pt_BR'
          }
        }
      />
    </DisqusWrapper>
  )
}

const DisqusWrapper = styled.div`
  /* border-top: 1px solid #f9f9f9; */
  margin: 100px 0;
  padding: 50px 16px 0;
  box-shadow: inset 0 3px 2px 0px rgba(0, 0, 0, .1);

  > div {
    max-width: 800px;
    margin: 0 auto;
  }
`
