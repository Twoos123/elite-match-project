import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <h1>EliteMatch</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/create-join-team">Create/Join Team</Link></li>
          <li><Link to="/analytics">Analytics</Link></li>
          <li><Link to="/search-matches">Search Matches</Link></li>
          <li><Link to="/create-tournament">Create Tournament</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
