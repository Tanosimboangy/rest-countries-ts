import React, { useContext } from 'react'
import GlobalContext from '../GlobalContext/GlobalState'
import {
  Svg,
  Input,
  BtnItem,
  ResetBtn,
  SelectBtn,
  SearchCountry,
  InputContainer,
  BtnSelectWrapper,
  SelectWrapper
} from '../Styles/FilteringForm'

function FilteringForm() {
  const {
    inputValue,
    showBtns,
    selectValue,
    showButtons,
    selectedRegion,
    searchCountry,
  } = useContext(GlobalContext)

  function selectCountryByRegion(e: any) {
    selectedRegion(e)
    showButtons()
  }


  return (
    <SearchCountry>
      <InputContainer>
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
      </InputContainer>
      <SelectWrapper>
        <SelectBtn value={selectValue} onClick={showButtons} type='button'>
          {selectValue !== "" ? selectValue : "Filter by regions"}
        </SelectBtn>
        {showBtns && (
          <BtnSelectWrapper>
            <BtnItem onClick={selectCountryByRegion} type='button' value='Africa'>
              Africa
            </BtnItem>
            <BtnItem
              onClick={selectCountryByRegion}
              type='button'
              value='Americas'>
              Americas
            </BtnItem>
            <BtnItem onClick={selectCountryByRegion} type='button' value='Asia'>
              Asia
            </BtnItem>
            <BtnItem onClick={selectCountryByRegion} type='button' value='Europe'>
              Europe
            </BtnItem>
            <BtnItem
              onClick={selectCountryByRegion}
              type='button'
              value='Oceania'>
              Oceania
            </BtnItem>
            <BtnItem
              onClick={selectCountryByRegion}
              type='button'
              value=''>
              All
            </BtnItem>
          </BtnSelectWrapper>
        )}
      </SelectWrapper>
      <ResetBtn onClick={showBtns === true ? showButtons : ""}>Reset</ResetBtn>
    </SearchCountry>
  )
}
export default FilteringForm
