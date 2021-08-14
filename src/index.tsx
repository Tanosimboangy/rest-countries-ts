import React from 'react'
import App from './App'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter as Router } from 'react-router-dom'
import { GlobalProvider } from './GlobalContext/GlobalState'

ReactDOM.render(
  <GlobalProvider>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </GlobalProvider>,
  document.getElementById('root')
)
reportWebVitals()
