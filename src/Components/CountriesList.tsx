import React, { useContext } from 'react'
import GlobalContext from '../GlobalContext/GlobalState'
import { Link } from 'react-router-dom'
import {
  ConuntriesList,
  LoadingContainer,
  LoadingImg,
  Wrapper,
  Flag,
  Card,
  CountryName,
  Population,
  Region,
  Capital,
} from '../Styles/CountriesList'
import LoadingImage from '../Img/Eclipse.svg'

function Home() {
  const { countriesData, inputValue, selectValue } = useContext(GlobalContext)

  return (
    <>
      {countriesData.length === 0 ? (
        <LoadingContainer>
          <LoadingImg src={LoadingImage} alt='loading' />
        </LoadingContainer>
      ) : (
        <ConuntriesList>
          {countriesData
            .filter((country: any) =>
              country.name.toLowerCase().includes(inputValue.toLowerCase())
            )
            .filter((region: any) =>
              selectValue ? region.region === selectValue : region
            )
            .map((country: any) => {
              const selectedCountry = country.name
              return (
                <Link to={`/${selectedCountry}`} key={country.name}>
                  <Wrapper>
                    <Flag src={country.flag} alt='country_flag' />
                    <Card>
                      <CountryName>{country.name}</CountryName>
                      <Population>
                        <span>Population: </span>
                        {country.population}
                      </Population>
                      <Region>
                        <span>Region: </span>
                        {country.region}
                      </Region>
                      <Capital>
                        <span>Capital: </span> {country.capital}
                      </Capital>
                    </Card>
                  </Wrapper>
                </Link>
              )
            })}
        </ConuntriesList>
      )}
    </>
  )
}
export default Home
