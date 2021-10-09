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
                    {item.borders.map((border: any) => {
                      return countriesData
                        .filter(
                          (singleCountry: any) => singleCountry.cioc === border
                        )
                        .map((item: any) => {
                          return (
                            <Link to={`/${item.name?.common}`} key={Date.now()}>
                              {item.name?.common}
                            </Link>
                          )
                        })
                    })}
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
