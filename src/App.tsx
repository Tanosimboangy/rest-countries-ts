import React from 'react'
import Head from './Pages/Head'
import Home from './Pages/Home'
import Details from './Pages/Details'
import { GlobalProvider } from './Context/GlobalState'
import { Route, Switch } from 'react-router'

function App() {
  return (
    <GlobalProvider>
      <Head title='Where is the world?' />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path={`/:selectedCountry`}>
          <Details />
        </Route>
      </Switch>
    </GlobalProvider>
  )
}

export default App
