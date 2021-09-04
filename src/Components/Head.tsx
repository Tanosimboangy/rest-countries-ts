import React, { useContext } from 'react'
import GlobalContext from '../GlobalContext/GlobalState'
import {
  Container,
  Header,
  Title,
  TextModeWrapper,
  TextMode,
  IconMode,
} from '../Styles/Head'
import Dark from '../Img/dark.svg'
import Light from '../Img/light.svg'

interface Props {
  title: string
}

const Head = ({ title = 'Hello' }: Props) => {
  const { switchMode, theme } = useContext(GlobalContext)
  console.log(Dark)
  console.log(Light)
  console.log(theme)

  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <TextModeWrapper type='button' onClick={switchMode}>
          <IconMode src={theme === 'light' ? Light : Dark} alt='mode icon' />
          <TextMode>Dark Mode</TextMode>
        </TextModeWrapper>
      </Header>
    </Container>
  )
}
export default Head
