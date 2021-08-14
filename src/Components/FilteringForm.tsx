import React, { useContext } from 'react'
import GlobalContext from '../Context/GlobalState'
import styled from 'styled-components'

const SearchCountry = styled.div`
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
const Form = styled.form`
  background-color: hsl(0, 0%, 100%);
  box-shadow: rgb(0 0 0 / 6%) 0px 0.2rem 0.9rem;
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
  &:hover {
    box-shadow: 1px 1px 4px #c5c4c4;
  }
`
const Svg = styled.svg`
  width: 16px;
  height: 16px;
`
const Input = styled.input`
  width: 80%;
  font-family: Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
`
const Select = styled.select`
  width: 100%;
  background-color: hsl(0, 0%, 100%);
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
  &:hover {
    box-shadow: 1px 1px 4px #c5c4c4;
  }
`
function FilteringForm() {
  const { searchCountry, inputValue, selectedRegion, selectValue } =
    useContext(GlobalContext)

  return (
    <SearchCountry>
      <Form>
        <Svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          width='24'
          height='24'>
          <path fill='none' d='M0 0h24v24H0z' />
          <path
            fill='rgb(133, 133, 133)'
            d='M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z'
          />
        </Svg>
        <Input
          placeholder='Search for a country ...'
          value={inputValue}
          onChange={searchCountry}
          type='text'
        />
      </Form>
      <Select value={selectValue} onChange={selectedRegion}>
        <option value=''>Filter by regions</option>
        <option value='Africa'>Africa</option>
        <option value='Americas'>Americas</option>
        <option value='Asia'>Asia</option>
        <option value='Europe'>Europe</option>
        <option value='Oceania'>Oceania</option>
      </Select>
    </SearchCountry>
  )
}
export default FilteringForm
