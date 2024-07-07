import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import CreateJoinTeam from './components/CreateJoinTeam';
import Analytics from './components/Analytics';
import SearchMatches from './components/SearchMatches';
import CreateTournament from './components/CreateTournament';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/elite-match-project" element={<Homepage />} />
          <Route path="/elite-match-project/create-join-team" element={<CreateJoinTeam />} />
          <Route path="/elite-match-project/analytics" element={<Analytics />} />
          <Route path="/elite-match-project/search-matches" element={<SearchMatches />} />
          <Route path="/elite-match-project/create-tournament" element={<CreateTournament />} />
          <Route path="/elite-match-project/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

