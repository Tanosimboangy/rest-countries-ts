import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import GlobalContext from '../GlobalContext/GlobalState'
import { Link } from 'react-router-dom'

import {
  DetailsContainer,
  Wrapper,
  Flag,
  Image,
  GoBack,
  Base,
  Name,
  SubContainer,
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
            <Flag>
              <Image src={item.flag} alt='flag' />
            </Flag>
            <Base>
              <Name>{item.name}</Name>
              <SubContainer>
                <div>
                  <p>
                    <span>Native Name: </span>
                    {item.nativeName}
                  </p>
                  <p>
                    <span>Population: </span>
                    {item.population}
                  </p>
                  <p>
                    <span>Region: </span>
                    {item.region}
                  </p>
                  <p>
                    <span>Sub Region: </span>
                    {item.subregion}
                  </p>
                  <p>
                    <span>Capital: </span>
                    {item.capital}
                  </p>
                </div>
                <div>
                  <p>
                    <span>Top Level Domain: </span>
                    {item.topLevelDomain}
                  </p>
                  {item.currencies.map((currencie: any) => (
                    <p key={currencie.code}>
                      <span>Currencies: </span>
                      {currencie.code}
                    </p>
                  ))}
                  <div>
                    <span>Languages: </span>
                    {item.languages.map((language: any) => (
                      <p key={language.name}>{language.name}</p>
                    ))}
                  </div>
                </div>
              </SubContainer>
              <BorderCountries>
                <span>Border Countries: </span>
                {/* {item.borders.map((border: any) => {
                                        return (
                                            countriesData.filter((singleCountry: any) => singleCountry.alpha3Code === border).map((item: any) => {
                                                return (
                                                    <Link to={`/${item.name}`} key={Date.now()}>{item.name}</Link>
                                                )
                                            })
                                        )
                                    })} */}
              </BorderCountries>
            </Base>
          </Wrapper>
        )
      })}
    </DetailsContainer>
  )
}
export default Details
