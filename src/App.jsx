import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import Another from './Another';
function App() {
  const [count, setCount] = useState(0);
  function decriment() {
    setCount(prevCount => prevCount - 1);
  }
  function increment() {
    setCount(prevCount => prevCount + 1);
  }
  const styleClass = {
    background: '#fff',
    fontSize: '34px',
    fontWeight: '54px',

  }
  return (
    <div className="App">
      <span style={styleClass}>{count}</span>
      <button onClick={decriment}>-</button>
      <button onClick={increment}>+</button>
      <Another name="Chaudhry Yousuf" />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
  );
}

export default App;
