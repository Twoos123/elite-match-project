import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Homepage';
import CreateJoinTeam from './components/CreateJoinTeam';
import Analytics from './components/Analytics';
import SearchMatches from './components/SearchMatches';
import CreateTournament from './components/CreateTournament';
import FAQ from './components/FAQ';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/elite-match-project" element={<Home />} />
        <Route path="/elite-match-project/create-join-team" element={<CreateJoinTeam />} />
        <Route path="/elite-match-project/analytics" element={<Analytics />} />
        <Route path="/elite-match-project/search-matches" element={<SearchMatches />} />
        <Route path="/elite-match-project/create-tournament" element={<CreateTournament />} />
        <Route path="/elite-match-project/faq" element={<FAQ />} />
      </Routes>
    </Router>
  );
}

export default App;


