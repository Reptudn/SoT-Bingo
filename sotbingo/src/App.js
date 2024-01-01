import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Board from './components/Board.js';
import Data from './assets/quests.json';
import About from './pages/About.js';
import './App.css';

function App() {

  const [quests, setQuests] = useState([]);

  useEffect(() => {
    setQuests(Data);
  }, []);

  return (
    <Router basename='/SoT-Bingo'>
      <Routes>
        <Route path="/" element={
          <Board quests={quests}/>
        } />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
