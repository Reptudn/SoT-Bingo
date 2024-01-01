import React, { useEffect, useState } from 'react';
import Board from './components/Board.js';
import Data from './assets/quests.json';
import './App.css';

function App() {

  const [quests, setQuests] = useState([]);

  useEffect(() => {
    setQuests(Data);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Board quests={quests}/>
      </header>
    </div>
  );
}

export default App;
