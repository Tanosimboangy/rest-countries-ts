import React from 'react';
import Head from './Pages/Head';
import Home from './Pages/Home';
import Details from './Pages/Details';
import { GlobalProvider} from './Context/GlobalState';
import styled from 'styled-components';
import { Route, Switch } from 'react-router';

const Container = styled.div`
  padding: 16px;
  @media(min-width: 720px) {
    padding: 0; 
  }
`;

function App() {
  return (
    <GlobalProvider>
      <Container>
        <Head title="Where is the world?" />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path={`/:selectedCountry`}>
            <Details />
          </Route>
        </Switch>
      </Container>
    </GlobalProvider>
  );
}

export default App;
