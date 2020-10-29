import { Footer } from './styles'

export default function FooterComp (){
  return (
    <Footer className="footer">
      <p>© Copyright {(new Date().getFullYear())} Airton Vancin Junior</p>
      <p>Site created using NextJs and Styled Component</p>
    </Footer>
  )
}
