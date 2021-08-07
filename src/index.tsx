import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter as Router } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    @font-face {
      font-family: 'NunitoSans';
      src: local(NunitoSans), url(./fonts/NunitoSans-Regular.woff2) format('woff2') format('embedded-opentype'),
      url(./fonts/NunitoSans-Regular.woff) format('woff') format('embedded-opentype');
    }
    html, body {
      font-family: 'NunitoSans', sans-serif;
      font-style: normal;
      background-color: rgb(250, 250, 250);
      margin: 0;
      h1, h2, h3, h4, h5, h6, p {
          margin: 0;
      }
      ul {
          padding: 0;
          margin: 0;
          li {
              list-style: none;
          }
      }
      a {
          text-decoration: none;
      }
      button,input,select {
        outline: none;
        border: none;
        cursor: pointer;
      }
    }
`

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalStyles />
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
reportWebVitals()
