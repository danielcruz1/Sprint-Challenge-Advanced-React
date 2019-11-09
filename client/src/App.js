import React from 'react';
import './App.css';
import PlayerCard from './components/playercard';
import Navbar from './components/navbar';


function App() {
  return (
    <div className="App">
      <PlayerCard />
      <Navbar />
    </div>
  );
}

export default App;
