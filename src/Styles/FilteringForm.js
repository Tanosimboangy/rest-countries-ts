import styled from 'styled-components'

export const SearchCountry = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  @media (min-width: 760px) {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: space-between;
    margin-bottom: 50px;
  }
`
export const InputContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
  position: relative;
`
export const Svg = styled.svg`
  width: 16px;
  height: 16px;
  position: absolute;
  top: 17px;
  left: 19px;
`
export const Input = styled.input`
  font-size: 14px;
  font-weight: 500;
  border-radius: 6px;
  font-style: normal;
  padding: 18px 18px 18px 50px;
  width: -webkit-fill-available;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.CardAndInputs};
  box-shadow: ${({ theme }) => theme.BoxShadow} 0px 1px 4px;
  @media (min-width: 760px) {
    width: 40%;
    margin-bottom: 0;
  }
  ::placeholder {
    color: ${({ theme }) => theme.text};
  }
`
export const SelectWrapper = styled.div`
  position: relative;
`

export const SelectBtn = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.CardAndInputs};
  padding: 18px 20px;
  border-radius: 6px;
  box-shadow: ${({ theme }) => theme.BoxShadow} 0px 1px 4px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 20px;
  text-align: center;
  color: ${({ theme }) => theme.text};
  @media (min-width: 760px) {
    width: 178px;
    margin-bottom: 0;
  }
`

export const BtnSelectWrapper = styled.div`
  padding: 16px 0;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.CardAndInputs};
  position: absolute;
  top: 145px;
  width: 100%;
  display: grid;
  z-index: 1;
  @media (min-width: 760px) {
    display: grid;
    width: 178px;
    position: absolute;
    right: 0px;
    top: 70px;
  }
`
export const BtnItem = styled.button`
  text-align: left;
  padding: 8px 25px;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.CardAndInputs};
  :hover {
    background-color: ${({ theme }) => theme.body};
  }
`