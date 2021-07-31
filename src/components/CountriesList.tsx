import React, { useContext } from 'react'
import GlobalContext from '../Context/GlobalState'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 760px) {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 20px;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`
const Loading = styled.h1`
  color: blue;
  font-size: 45px;
  line-height: 55px;
  font-weight: 700;
  font-family: Arial, Helvetica, sans-serif;
  font-style: normal;
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
`
const Wrapper = styled.div`
  max-width: 280px;
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-right: 10px;
  margin-bottom: 40px;
  @media (min-width: 760px) {
    max-width: 240px;
    margin: 0;
    margin-bottom: 30px;
  }
  &:hover {
    border-radius: 4px;
    transform: translateY(-6px);
    box-shadow: rgb(0 0 0 / 5%) 0px 0px 0.7rem 0.2rem;
    transition: transform 0.2s ease 0s, opacity 0.2s ease 0s;
  }
`
const Flag = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`
const Card = styled.div`
  padding: 0 20px;
  width: 100%;
  height: auto;
  background-color: hsl(0, 0%, 100%);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  padding-bottom: 20px;
  span {
    font-weight: bolder;
    color: black;
  }
`
const CountryName = styled.h2`
  font-family: Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: bolder;
  font-size: 16px;
  color: hsl(209, 23%, 22%);
  padding-bottom: 20px;
  padding-top: 20px;
`
const Population = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: hsl(209, 23%, 22%);
  padding-bottom: 10px;
`
const Region = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: hsl(209, 23%, 22%);
  padding-bottom: 10px;
`
const Capital = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: hsl(209, 23%, 22%);
  padding-bottom: 10px;
`

function Home() {
  const { countriesData, inputValue, selectValue } = useContext(GlobalContext)

  return (
    <Container>
      {countriesData.length === 0 ? (
        <Loading>Loading ...</Loading>
      ) : (
        countriesData
          .filter((country: any) =>
            country.name.toLowerCase().includes(inputValue)
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
          })
      )}
    </Container>
  )
}
export default Home
