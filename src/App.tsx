import React, { useContext } from 'react'
import Head from './Components/Head'
import Home from './Pages/Home'
import Details from './Pages/Details'
import { Route, Switch } from 'react-router'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './Components/GlobalStyle'
import { lightTheme, darkTheme } from './Components/Theme'
import GlobalContext from './GlobalContext/GlobalState'

function App() {
  const { theme } = useContext(GlobalContext)

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Head title='Where is the world?' />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path={`/:selectedCountry`}>
          <Details />
        </Route>
      </Switch>
    </ThemeProvider>
  )
}

export default App
