import React from 'react';
import logo from './logo.svg';

import { Counter } from '../Counter';

import './App.css';

function App({ increment, decrement, reset, counter }) {
  return (
    <div className="App">
        <Counter />
    </div>
  );
}

export default App;
