import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="brand">
          <h1>EliteMatch</h1>
        </div>
        <div className="nav-items">
          <ul>
            <li><Link to="/elite-match-project">Home</Link></li>
            <li><Link to="/elite-match-project/create-join-team">Create/Join Team</Link></li>
            <li><Link to="/elite-match-project/analytics">Analytics</Link></li>
            <li><Link to="/elite-match-project/search-matches">Search Matches</Link></li>
            <li><Link to="/elite-match-project/create-tournament">Create Tournament</Link></li>
            <li><Link to="/elite-match-project/faq">FAQ</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
