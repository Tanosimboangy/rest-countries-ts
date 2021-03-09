import React, {useEffect, useReducer, createContext } from 'react';
const URLALL = "https://restcountries.eu/rest/v2/all";


export const initialValue: State = {
    countriesData: [],
}

type State = {
    countriesData: any,
}

type data = {
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
    __proto__: Object[]
}

type Action = 
|   {type: "FETCHING_COUNTRIES_DATA", payload: data[]}


const GlobalContext = createContext(initialValue);
export default GlobalContext;

function reducer(state: State = initialValue, action: Action) {
    switch(action.type) {
        case "FETCHING_COUNTRIES_DATA":
            return {...state, countriesData: action.payload};
        default:
            return state;
    }
}

export const GlobalProvider: React.FC = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialValue);
    
    async function gettingCountriesData() {
        const FetchingCountries = await fetch(URLALL);
        const res = await FetchingCountries.json();        
        dispatch({ type: 'FETCHING_COUNTRIES_DATA', payload: res})
    }
    
    useEffect(() => {
        gettingCountriesData();
    }, [])

    return (
        <GlobalContext.Provider value={{countriesData: state.countriesData}}>
            {children}
        </GlobalContext.Provider>
        )
    }