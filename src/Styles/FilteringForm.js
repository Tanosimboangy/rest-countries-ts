import styled from 'styled-components'

export const SearchCountry = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 760px) {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: space-between;
    margin-bottom: 50px;
  }
`
export const Form = styled.form`
  background-color: ${({ theme }) => theme.CardAndInputs};
  border-radius: 4px;
  padding: 18px 18px 18px 26px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 20px;
  @media (min-width: 760px) {
    width: 40%;
    margin-bottom: 0;
  }
`
export const Svg = styled.svg`
  width: 16px;
  height: 16px;
`
export const Input = styled.input`
  width: 80%;
  font-family: Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  background-color: ${({ theme }) => theme.CardAndInputs};
`
export const Select = styled.select`
  width: 100%;
  background-color: ${({ theme }) => theme.CardAndInputs};
  padding: 18px 20px;
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 6%) 0px 0.2rem 0.9rem;
  font-family: Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 50px;
  @media (min-width: 760px) {
    width: 220px;
    margin-bottom: 0;
  }
`
