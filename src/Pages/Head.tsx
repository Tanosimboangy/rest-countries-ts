import React, { useContext } from 'react'
import GlobalContext from '../Context/GlobalState'
import styled from 'styled-components'

const Container = styled.div`
  background: rgb(255, 255, 255);
  box-shadow: rgb(0 0 0 / 6%) 0px 0.2rem 0.4rem;
  margin-bottom: 35px;
  @media (min-width: 760px) {
    margin-bottom: 50px;
  }
`
const Header = styled.header`
  padding: 16px 0;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
  width: 90%;
  margin: 0px auto;
  @media (min-width: 760px) {
    padding: 20px 0;
    width: 88%;
    margin: 0px auto;
  }
`
const Title = styled.h1`
  font-size: 14px;
  font-weight: 600;
  font-style: normal;
  white-space: nowrap;
  padding-top: 0;
  margin: 0;
  @media (min-width: 760px) {
    font-size: 22px;
  }
`
const ModeText = styled.button`
  font-size: 12px;
  font-weight: 400;
  font-style: normal;
  background: rgb(255, 255, 255);
  margin: 0;
  padding: 16px;
  @media (min-width: 760px) {
    font-size: 18px;
  }
`
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
