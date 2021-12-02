import styled from 'styled-components'

export const Container = styled.div`
  background: ${({ theme }) => theme.CardAndInputs};
  box-shadow: ${({ theme }) => theme.BoxShadow} 4px 4px 8px;
  margin-bottom: 35px;
  @media (min-width: 760px) {
    margin-bottom: 50px;
  }
`
export const Header = styled.header`
  padding: 40px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
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
export const TextModeWrapper = styled.button`
  background: rgb(255, 255, 255);
  background-color: ${({ theme }) => theme.CardAndInputs};
  margin: 0;
  padding: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`
export const IconMode = styled.img`
  margin-right: 6px;
  width: 18px;
  width: 18px;
  @media (min-width: 760px) {
    width: 25px;
    height: 25px;
  }
`
export const TextMode = styled.span`
  font-size: 14px;
  font-weight: 600;
  font-style: normal;
  @media (min-width: 760px) {
    font-size: 18px;
  }
  color: ${({ theme }) => theme.text};
`
