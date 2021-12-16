import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import LoadingImage from '../Img/Eclipse.svg'
import GlobalContext from '../GlobalContext/GlobalState'
import { LoadingContainer, LoadingImg } from '../Styles/CountriesList'

import {
  DetailsContainer,
  Wrapper,
  Flag,
  GoBack,
  Base,
  Name,
  SubContainer,
  Frame,
  Detail,
  Span,
  CountryLanguage,
  BorderCountries,
} from '../Styles/Details'

interface CountriesData {
  altSpellings: [string, string]
  area: number
  borders: [string, string, string, string, string, string]
  capital: string
  cca2: string
  cca3: string
  ccn3: string
  cioc: string
  currencies: [object[]]
  demonym: string
  flag: string
  flags: [object[]]
  idd: [object[]]
  independent: boolean
  landlocked: boolean
  languages: [object[], object[], object[]]
  latlng: [number, number]
  translations: {
    ces: [object[]]
    cym: [object[]]
    est: [object[]]
    fin: [object[]]
    fra: [object[]]
  }
  name: { common: string; official: string; nativeName: [object[]] }
  unMember: boolean
  population: number
  region: string
  status: string
  subregion: string
  tld: [string]
  maps: { googleMaps: string; openStreetMaps: string }
}

function Details() {
  const { countriesData } = useContext(GlobalContext)
  const { selectedCountry } = useParams()
  const country = countriesData.filter(
    (item) => item.name?.common === selectedCountry
  )

  return (
    <DetailsContainer>
      <GoBack>
        <Link to='/'>
          <span>←</span> Back
        </Link>
      </GoBack>
      {countriesData.length === 0 ? (
        <LoadingContainer>
          <LoadingImg src={LoadingImage} alt='loading' />
        </LoadingContainer>
      ) : (
        country.map((item: any) => {
          return (
            <Wrapper key={item.name}>
              <Flag src={item.flags.svg} alt='flag' />
              <Base>
                <Name>{item.name.common}</Name>
                <SubContainer>
                  <Frame>
                    <Detail>
                      <Span>Native Name: </Span>
                      {item?.name?.official}
                    </Detail>
                    <Detail>
                      <Span>Population: </Span>
                      {item.population}
                    </Detail>
                    <Detail>
                      <Span>Region: </Span>
                      {item.region}
                    </Detail>
                    <Detail>
                      <Span>Sub Region: </Span>
                      {item.subregion}
                    </Detail>
                    <Detail>
                      <Span>Capital: </Span>
                      {item.capital}
                    </Detail>
                  </Frame>
                  <Frame>
                    <Detail>
                      <Span>Top Level Domain: </Span>
                      {item.cca2.toLowerCase()}
                    </Detail>
                    {Object.values(item.currencies).map((currencie: any) => (
                      <Detail key={currencie.name}>
                        <Span>Currencies: </Span>
                        {currencie.name}
                      </Detail>
                    ))}
                    <CountryLanguage>
                      <p>Languages:</p>
                      <aside>
                        {Object.keys(item.languages).length > 0
                          ? Object.values(item.languages).map(
                              (lang: any, ind: number) => (
                                <Span key={lang[ind]}>{lang}</Span>
                              )
                            )
                          : null}
                      </aside>
                    </CountryLanguage>
                  </Frame>
                </SubContainer>
                <BorderCountries>
                  <span>Border Countries: </span>
                  <aside>
                    {item.borders === []
                      ? 'No borders'
                      : item.borders.length > 1
                      ? item.borders.map((border: string) => {                        
                          return countriesData
                            .filter(
                              (singleCountry: any) => {
                                
                                return singleCountry.cioc === border
                              }                       
                            )
                            .map((item: CountriesData) => {
                              return (
                                <Link
                                  to={`/${item.name?.common}`}
                                  key={Date.now()}>
                                  {item.name?.common}
                                </Link>
                              )
                            })
                        })
                      : item.borders}
                  </aside>
                </BorderCountries>
              </Base>
            </Wrapper>
          )
        })
      )}
    </DetailsContainer>
  )
}
export default Details
