import React from 'react';
import Head from './components/Head';
import Button from './components/Button';
import Input from './components/Input';
import ReducerButton from './components/ReducerButton';
import logo from './logo.svg';
import { GlobalProvider} from './components/GlobalState';
import BigC from './components/BigC';
import './App.css';

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Head title="Hello" isActive={true}/>
        <BigC title="class" />
        <Button onClick={(e) => {
          e.preventDefault();
          console.log(e)
        }}>Hello World</Button>
        <ReducerButton/>
        <Input />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </GlobalProvider>
  );
}

export default App;
