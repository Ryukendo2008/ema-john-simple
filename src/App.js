import logo from './logo.svg';
import Header from './Components/Header/Header';
import './App.css';
import React from 'react';
import Shop from './Components/Shop/Shop';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
    </div>
  );
}

export default App;
