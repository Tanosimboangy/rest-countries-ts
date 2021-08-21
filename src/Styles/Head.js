import styled from 'styled-components'

export const Container = styled.div`
  background: ${({ theme }) => theme.CardAndInputs};
  box-shadow: rgb(0 0 0 / 6%) 0px 0.2rem 0.4rem;
  margin-bottom: 35px;
  @media (min-width: 760px) {
    margin-bottom: 50px;
  }
`
export const Header = styled.header`
  padding: 40px 0;
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
export const Title = styled.h1`
  font-size: 14px;
  font-weight: 600;
  font-style: normal;
  white-space: nowrap;
  padding-top: 0;
  margin: 0;
  color: ${({ theme }) => theme.text};
  @media (min-width: 760px) {
    font-size: 22px;
  }
`
export const ModeText = styled.button`
  font-size: 14px;
  font-weight: 600;
  font-style: normal;
  background: rgb(255, 255, 255);
  background-color: ${({ theme }) => theme.CardAndInputs};
  color: ${({ theme }) => theme.text};
  margin: 0;
  padding: 16px;
  @media (min-width: 760px) {
    font-size: 18px;
  }
`
