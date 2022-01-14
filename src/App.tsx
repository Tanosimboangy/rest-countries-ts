import { useContext } from 'react'
import Head from './Components/Head'
import HomePage from './Pages/HomePage'
import DetailsPage from './Pages/DetailsPage'
import { Route, Switch } from 'react-router'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './Styles/GlobalStyle'
import { lightTheme, darkTheme } from './Styles/Theme'
import GlobalContext from './GlobalContext/GlobalState'

function App() {
  const { theme } = useContext(GlobalContext)

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Head title='Where is the world?' />
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route path={`/:selectedCountry`}>
          <DetailsPage />
        </Route>
      </Switch>
    </ThemeProvider>
  )
}

export default App
