import styled from 'styled-components'

export const DetailsContainer = styled.div`
  display: block;
  width: 90%;
  margin: auto;
  @media (min-width: 720px) {
    max-width: 88%;
    margin: auto;
  }
`
export const Wrapper = styled.div`
  display: grid;
  @media (min-width: 950px) {
    max-width: 100%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10%;
  }
`
export const Flag = styled.div`
  max-width: 500px;
  margin: auto;
  @media (max-width: 720px) {
    max-width: 600pxpx;
    margin: auto;
  }
`
export const Image = styled.img`
  border-radius: 8px;
  width: 100%;
`
export const GoBack = styled.button`
  display: inline-block;
  margin-bottom: 40px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.CardAndInputs};
  box-shadow: ${({ theme }) => theme.BoxShadow} 2px 3px 3px;
  a {
    display: block;
    padding: 6px 16px;
    color: ${({ theme }) => theme.text};
    font-size: 16px;
    font-weight: 600;
    span {
      font-weight: bolder;
      font-size: 20px;
    }
  }
`
export const Base = styled.div`
  padding-top: 20px;
  div {
    span {
      font-size: 16px;
      font-weight: 600;
      font-style: normal;
    }
  }
`
export const Name = styled.h3`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  padding-bottom: 20px;
  color: ${({ theme }) => theme.text};
`
export const SubContainer = styled.div`
  color: ${({ theme }) => theme.text};
  @media (min-width: 720px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`
export const BorderCountries = styled.div`
  color: ${({ theme }) => theme.text};
`
