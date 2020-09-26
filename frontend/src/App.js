import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    fetch('/api/greeting')
    .then(resp => resp.text())
    .then(msg => setGreeting(msg))
  },[])
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h5>{greeting}</h5>
      </header>
    </div>
  );
}

export default App;
