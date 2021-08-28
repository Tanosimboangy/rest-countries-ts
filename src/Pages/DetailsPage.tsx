import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import GlobalContext from '../GlobalContext/GlobalState'
import { Link } from 'react-router-dom'

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

function Details() {
  const { countriesData } = useContext(GlobalContext)
  const { selectedCountry } = useParams()
  const country = countriesData.filter((item) => item.name === selectedCountry)

  return (
    <DetailsContainer>
      <GoBack>
        <Link to='/'>
          <span>←</span> Back
        </Link>
      </GoBack>
      {country.map((item: any) => {
        return (
          <Wrapper key={item.name}>
            <Flag src={item.flag} alt='flag' />
            <Base>
              <Name>{item.name}</Name>
              <SubContainer>
                <Frame>
                  <Detail>
                    <Span>Native Name: </Span>
                    {item.nativeName}
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
                    {item.topLevelDomain}
                  </Detail>
                  {item.currencies.map((currencie: any) => (
                    <Detail key={currencie.code}>
                      <Span>Currencies: </Span>
                      {currencie.code}
                    </Detail>
                  ))}
                  <CountryLanguage>
                    <p>Languages:</p>
                    {item.languages.map((language: any) => (
                      <span key={language.name}>{language.name}</span>
                    ))}
                  </CountryLanguage>
                </Frame>
              </SubContainer>
              <BorderCountries>
                <span>Border Countries: </span>
                <aside>
                  {item.borders.map((border: any) => {
                    return countriesData
                      .filter(
                        (singleCountry: any) =>
                          singleCountry.alpha3Code === border
                      )
                      .map((item: any) => {
                        return (
                          <Link to={`/${item.name}`} key={Date.now()}>
                            {item.name}
                          </Link>
                        )
                      })
                  })}
                </aside>
              </BorderCountries>
            </Base>
          </Wrapper>
        )
      })}
    </DetailsContainer>
  )
}
export default Details
