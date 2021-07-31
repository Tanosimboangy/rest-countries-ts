import React from 'react'
import styled from 'styled-components'
import FilteringForm from '../components/FilteringForm'
import CountriesList from '../components/CountriesList'

const WrapContainer = styled.div`
  width: 90%;
  margin: 0px auto;
  @media (min-width: 760px) {
    width: 88%;
    margin: 0px auto;
  }
`

function Home() {
  return (
    <WrapContainer>
      <FilteringForm />
      <CountriesList />
    </WrapContainer>
  )
}
export default Home
