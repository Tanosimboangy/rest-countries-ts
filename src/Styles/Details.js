import styled from 'styled-components'

export const DetailsContainer = styled.div`
  display: block;
  width: 90%;
  margin: auto;
  padding-bottom: 96px;
  @media (min-width: 760px) {
    max-width: 88%;
    margin: auto;
  }
`
export const Wrapper = styled.div`
  display: grid;
  max-width: 95%;
  margin: auto;
  row-gap: 40px;
  @media (min-width: 950px) {
    max-width: 100%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 12%;
  }
`
export const Flag = styled.img`
  border-radius: 8px;
  width: 95%;
  margin: auto;
  height: 100%;
  @media (min-width: 950px) {
    width: 100%;
    margin: auto;
    height: 100%;
  }
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
  max-width: 95%;
  margin-left: 2.5%;
  margin-right: 2.5%;
  @media (min-width: 950px) {
    margin-left: 0;
    margin-right: 0;
  }
`
export const Name = styled.h3`
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  margin-bottom: 30px;
  color: ${({ theme }) => theme.text};
  @media (min-width: 720px) {
    font-size: 50px;
  }
`
export const SubContainer = styled.div`
  color: ${({ theme }) => theme.text};
  @media (min-width: 760px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
`
export const Frame = styled.div`
  margin-bottom: 20px;
`
export const Detail = styled.p`
  font-size: 16px;
  font-weight: 300;
  margin-bottom: 16px;
`
export const Span = styled.span`
  font-size: 20px;
  font-weight: 400;
`
export const CountryLanguage = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: baseline;
  gap: 16px;
  p {
    font-size: 20px;
    font-weight: 400;
    margin-right: 10px;
  }
  aside {
    span {
      font-size: 16px;
      font-weight: 300;
    }
    span:not(:last-child) {
      margin-right: 10px;
    }
  }
`
export const BorderCountries = styled.div`
  color: ${({ theme }) => theme.text};
  display: flex;
  flex-direction: column;
  justify-content: left;
  @media (min-width: 760px) {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    flex-wrap: wrap;
    gap: 16px;
  }
  span {
    font-size: 20px;
    font-weight: 400;
    white-space: nowrap;
    margin-right: 20px;
    margin-bottom: 20px;
  }
  aside {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    flex-wrap: wrap;
    gap: 16px;
    a {
      text-decoration: none;
      font-size: 14px;
      font-weight: 300;
      padding: 10px 30px;
      white-space: nowrap;
      color: ${({ theme }) => theme.text};
      background-color: ${({ theme }) => theme.CardAndInputs};
      border-radius: 4px;
      :hover {
        box-shadow: ${({ theme }) => theme.BoxShadow} 2px 3px 3px;
      }
    }
  }
`
