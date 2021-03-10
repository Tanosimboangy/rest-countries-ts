import React, {useEffect, useReducer, createContext } from 'react';
const URLALL = "https://restcountries.eu/rest/v2/all";

export const initialValue: State = {
    countriesData: [],
    searchCountry: () => {},
}

type State = {
    countriesData: CountriesData[],
    searchCountry: (parapm: any) => void,
}

type CountriesData = {
    alpha2Code: string
    alpha3Code: string
    altSpellings: [string, string]
    area: number
    borders:  [string, string, string, string, string, string,]
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
    translations: {de: string, es: string, fr: string, ja: string, it: string}
}

type Action = 
|   {type: "FETCHING_COUNTRIES", payload: CountriesData[]}
|   {type: "FETCHING_SELETED_COUNTRIES", value: CountriesData[]}

const GlobalContext = createContext(initialValue);
export default GlobalContext;

function reducer(state: State = initialValue, action: Action) {
    switch(action.type) {
        case "FETCHING_COUNTRIES":
            return {...state, countriesData: action.payload};
        case "FETCHING_SELETED_COUNTRIES":
            return {...state, countriesData: action.value};
        default:
            return state;
    }
}

export const GlobalProvider: React.FC = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialValue);
    
    async function gettingCountriesData() {
        const FetchingCountries = await fetch(URLALL);
        const res = await FetchingCountries.json();
        dispatch({ type: 'FETCHING_COUNTRIES', payload: res})
    }
    useEffect(() => {
        gettingCountriesData();
    }, [])

    return (
        <GlobalContext.Provider 
            value={{
                countriesData: state.countriesData,
                searchCountry: (parapm) => dispatch({type: "FETCHING_SELETED_COUNTRIES", value: parapm})
                }}>
            {children}
        </GlobalContext.Provider>
        )
    }