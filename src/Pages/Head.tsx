import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background: rgb(255, 255, 255);
  box-shadow: rgb(0 0 0 / 6%) 0px 0.2rem 0.4rem;
  margin-bottom: 35px;
  @media (min-width: 760px) {
    margin-bottom: 70px;
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
  padding-top: 0;
  margin: 0;
  @media (min-width: 760px) {
    font-size: 18px;
  }
`
type Props = {
  title: string
}

const Head = ({ title = 'Hello' }: Props) => {
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <ModeText>Dark Mode</ModeText>
      </Header>
    </Container>
  )
}
export default Head
