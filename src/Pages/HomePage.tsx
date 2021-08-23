import React from 'react'
import FilteringForm from '../Components/FilteringForm'
import CountriesList from '../Components/CountriesList'
import { WrapContainer } from '../Styles/Home'

function Home() {
  return (
    <WrapContainer>
      <FilteringForm />
      <CountriesList />
    </WrapContainer>
  )
}
export default Home
