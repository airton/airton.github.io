import { Condition } from 'components/Condition'
import { Text, Btn, BtnLarge } from './styles'

export const Button = ({ children, href, type = 'default' }) => {

  return (
    <>
      <Condition condition={type === 'default'}>
        <Btn href={href}>
          <Text>{children}</Text>
        </Btn>
      </Condition>
      <Condition condition={type === 'large'}>
        <BtnLarge href={href}>
          <Text>{children}</Text>
        </BtnLarge>
      </Condition>
    </>
  )
}
