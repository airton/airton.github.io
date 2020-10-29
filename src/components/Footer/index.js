import { Footer } from './styles'

export default function FooterComp (){
  return (
    <Footer className="footer">
      <p>© Copyright {(new Date().getFullYear())} Airton Vancin Junior</p>
    </Footer>
  )
}
