import React from 'react';
import Head from './components/Head';
import { GlobalProvider} from './components/GlobalState';
import styled from 'styled-components';

const Container = styled.div`
  padding: 16px
`;

function App() {
  return (
    <GlobalProvider>
      <Container>
        <Head title="Where is the world?" />
      </Container>
    </GlobalProvider>
  );
}

export default App;
