import React, { useState } from 'react';
import '../styles/SearchMatches.css';

function SearchMatches() {
  const [filters, setFilters] = useState({
    game: '',
    skillLevel: '',
    matchType: '',
    region: '',
  });

  const [matches, setMatches] = useState([
    { id: 1, game: 'CS2', skillLevel: 'High', matchType: 'Ranked', region: 'NA' },
    { id: 2, game: 'Valorant', skillLevel: 'Medium', matchType: 'Casual', region: 'EU' },
    { id: 3, game: 'Overwatch 2', skillLevel: 'Low', matchType: 'Custom', region: 'Asia' },
  ]);

  const handleSearch = () => {
    const filteredMatches = matches.filter(match => {
      return (
        (filters.game === '' || match.game.toLowerCase().includes(filters.game.toLowerCase())) &&
        (filters.skillLevel === '' || match.skillLevel.toLowerCase().includes(filters.skillLevel.toLowerCase())) &&
        (filters.matchType === '' || match.matchType.toLowerCase().includes(filters.matchType.toLowerCase())) &&
        (filters.region === '' || match.region.toLowerCase().includes(filters.region.toLowerCase()))
      );
    });

    setMatches(filteredMatches);
  };

  return (
    <div className="search-matches">
      <h2>Search Matches</h2>
      <div className="filters">
        <input
          type="text"
          placeholder="Game (e.g., CS2, Valorant, Overwatch 2)"
          value={filters.game}
          onChange={(e) => setFilters({ ...filters, game: e.target.value })}
        />
        <input
          type="text"
          placeholder="Skill Level"
          value={filters.skillLevel}
          onChange={(e) => setFilters({ ...filters, skillLevel: e.target.value })}
        />
        <input
          type="text"
          placeholder="Match Type"
          value={filters.matchType}
          onChange={(e) => setFilters({ ...filters, matchType: e.target.value })}
        />
        <input
          type="text"
          placeholder="Region"
          value={filters.region}
          onChange={(e) => setFilters({ ...filters, region: e.target.value })}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="match-cards">
        {matches.map(match => (
          <div key={match.id} className="match-card">
            <h3>{match.game}</h3>
            <p><strong>Skill Level:</strong> {match.skillLevel}</p>
            <p><strong>Match Type:</strong> {match.matchType}</p>
            <p><strong>Region:</strong> {match.region}</p>
          </div>
        ))}
        {matches.length === 0 && <p>No matches found.</p>}
      </div>
    </div>
  );
}

export default SearchMatches;
