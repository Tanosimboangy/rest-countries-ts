import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    html, body {
        /* font-family: "Rubik"; */
        font-family: "Arial";
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: antialiased;
        /* background:  (0deg 0% 90% / 10%); */
        background:  #fbfbfb;
        font-size: 16px;
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
    }
`;


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalStyles/>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
