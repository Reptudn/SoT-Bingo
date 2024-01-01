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
    <div class="App">
      <Board quests={quests}/>
    </div>
  );
}

export default App;
