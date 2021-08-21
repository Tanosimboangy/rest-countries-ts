import React, { useContext } from 'react'
import GlobalContext from '../GlobalContext/GlobalState'
import { Container, Header, Title, ModeText } from '../Styles/Head'

interface Props {
  title: string
}

const Head = ({ title = 'Hello' }: Props) => {
  const { switchMode } = useContext(GlobalContext)

  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <ModeText onClick={switchMode}>Dark Mode</ModeText>
      </Header>
    </Container>
  )
}
export default Head
