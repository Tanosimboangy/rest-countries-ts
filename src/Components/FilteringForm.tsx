import React, { useContext } from 'react'
import GlobalContext from '../GlobalContext/GlobalState'
import {
  Svg,
  Input,
  BtnItem,
  SelectBtn,
  SearchCountry,
  BtnSelectWrapper,
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
      <Input
        placeholder='Search for a country ...'
        value={inputValue}
        onChange={searchCountry}
        type='text'
      />
      <SelectBtn value={selectValue} onClick={showButtons} type='button'>
        Filter by regions
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
        </BtnSelectWrapper>
      )}
      {/* <Select value={selectValue} onChange={selectedRegion}> */}
    </SearchCountry>
  )
}
export default FilteringForm
