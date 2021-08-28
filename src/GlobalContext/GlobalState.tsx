import React, { useEffect, useReducer, createContext } from 'react'
const URLALL = 'https://restcountries.eu/rest/v2/all'

export const initialValue: State = {
  inputValue: '',
  theme: 'light',
  selectValue: '',
  showBtns: false,
  countriesData: [],
  searchCountry: () => {},
  selectedRegion: () => {},
  switchMode: () => {},
  showButtons: () => {},
}

interface State {
  theme?: string
  inputValue: string
  selectValue: string
  showBtns: boolean
  countriesData: CountriesData[]
  switchMode: () => void
  showButtons: () => void
  selectedRegion: (e: React.ChangeEvent<HTMLInputElement>) => void
  searchCountry: (e: React.ChangeEvent<HTMLInputElement>) => void
}

interface CountriesData {
  alpha2Code: string
  alpha3Code: string
  altSpellings: [string, string]
  area: number
  borders: [string, string, string, string, string, string]
  callingCodes: [string]
  capital: string
  cioc: string
  currencies: [object[]]
  demonym: string
  flag: string
  gini: number
  languages: [object[], object[], object[]]
  latlng: [number, number]
  name: string
  nativeName: string
  numericCode: string
  population: number
  region: string
  regionalBlocs: [object[]]
  subregion: string
  timezones: [string]
  topLevelDomain: [string]
  translations: { de: string; es: string; fr: string; ja: string; it: string }
}

type Action =
  | { type: 'FETCHING_COUNTRIES'; payload: CountriesData[] }
  | { type: 'FETCHING_SELECTED_COUNTRIES'; value: string }
  | { type: 'FETCHING_SELECTED_REGION'; value: string }
  | { type: 'SWITCH_MODE'; value: string }
  | { type: 'SHOW_BUTTON'; value: boolean }

const GlobalContext = createContext(initialValue)
export default GlobalContext

function reducer(state: State = initialValue, action: Action) {
  switch (action.type) {
    case 'FETCHING_COUNTRIES':
      return { ...state, countriesData: action.payload }
    case 'FETCHING_SELECTED_COUNTRIES':
      return { ...state, inputValue: action.value }
    case 'FETCHING_SELECTED_REGION':
      return { ...state, selectValue: action.value }
    case 'SWITCH_MODE': {
      return { ...state, theme: action.value }
    }
    case 'SHOW_BUTTON': {
      return { ...state, showBtn: action.value }
    }
    default:
      return state
  }
}

export const GlobalProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValue)
  async function gettingCountriesData() {
    const FetchingCountries = await fetch(URLALL)
    const res = await FetchingCountries.json()
    dispatch({ type: 'FETCHING_COUNTRIES', payload: res })
  }

  useEffect(() => {
    setTimeout(() => {
      gettingCountriesData()
    }, 300)
  }, [])

  return (
    <GlobalContext.Provider
      value={{
        theme: state.theme,
        showBtns: state.showBtns,
        inputValue: state.inputValue,
        selectValue: state.selectValue,
        countriesData: state.countriesData,
        searchCountry: (e) =>
          dispatch({
            type: 'FETCHING_SELECTED_COUNTRIES',
            value: e.target.value,
          }),
        selectedRegion: (e) =>
          dispatch({
            type: 'FETCHING_SELECTED_REGION',
            value: e.target.value,
          }),
        switchMode: () =>
          dispatch({
            type: 'SWITCH_MODE',
            value: state.theme === 'light' ? 'dark' : 'light',
          }),
        showButtons: () => {
          dispatch({
            type: 'SHOW_BUTTON',
            value: (state.showBtns = !state.showBtns),
          })
        },
      }}>
      {children}
    </GlobalContext.Provider>
  )
}
