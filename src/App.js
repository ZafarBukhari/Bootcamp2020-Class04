import React, { useState } from 'react';
import {Message} from './message';
import './App.css';

function App() {
  let [count, setCount] = useState(0)
  let [isMorning, setMorning] = useState(false)

  return (
    <div className={isMorning ? 'dayLight' : 'night'}>    

    <h1>Good {isMorning ? 'Morning' : 'Night'}</h1>

      <Message counter={count} />

      <button onClick={
        () => setCount(count + 1)
      }>
        Update Counter
      </button>

      <button onClick={
        () => setMorning(!isMorning)
      }>
        Update Day
      </button>
    </div>
  );
}

export default App;
