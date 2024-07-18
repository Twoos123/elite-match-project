import React, { useState, useEffect } from 'react';
import '../styles/SearchMatches.css';

function SearchMatches() {
  const initialMatches = [
    { id: 1, game: 'CS2', skillLevel: 'Pro', matchType: 'Ranked', region: 'NA' },
    { id: 2, game: 'Valorant', skillLevel: 'Semi-Pro', matchType: 'Casual', region: 'EU' },
    { id: 3, game: 'Overwatch 2', skillLevel: 'Beginner', matchType: 'Custom', region: 'Asia' },
    { id: 4, game: 'CS2', skillLevel: 'Amateur', matchType: 'Casual', region: 'NA' },
    { id: 5, game: 'Valorant', skillLevel: 'Beginner', matchType: 'Ranked', region: 'EU' },
    { id: 6, game: 'Overwatch 2', skillLevel: 'Amateur', matchType: 'Custom', region: 'Asia' },
    { id: 7, game: 'CS2', skillLevel: 'Amateur', matchType: 'Ranked', region: 'EU' },
    { id: 8, game: 'Valorant', skillLevel: 'Pro', matchType: 'Casual', region: 'NA' },
    { id: 9, game: 'Overwatch 2', skillLevel: 'Pro', matchType: 'Custom', region: 'Asia' },
    { id: 10, game: 'CS2', skillLevel: 'Beginner', matchType: 'Ranked', region: 'EU' },
    { id: 11, game: 'Valorant', skillLevel: 'Pro', matchType: 'Casual', region: 'NA' },
    { id: 12, game: 'Overwatch 2', skillLevel: 'Semi-Pro', matchType: 'Custom', region: 'EU' },
    { id: 13, game: 'CS2', skillLevel: 'Semi-Pro', matchType: 'Ranked', region: 'NA' },
    { id: 14, game: 'Valorant', skillLevel: 'Beginner', matchType: 'Ranked', region: 'EU' },
    { id: 15, game: 'Overwatch 2', skillLevel: 'Amateur', matchType: 'Custom', region: 'Asia' },
    { id: 16, game: 'CS2', skillLevel: 'Amateur', matchType: 'Casual', region: 'NA' },
    { id: 17, game: 'Valorant', skillLevel: 'Pro', matchType: 'Casual', region: 'EU' },
    { id: 18, game: 'Overwatch 2', skillLevel: 'Beginner', matchType: 'Custom', region: 'Asia' },
    { id: 19, game: 'CS2', skillLevel: 'Beginner', matchType: 'Ranked', region: 'EU' },
    { id: 20, game: 'Valorant', skillLevel: 'Semi-Pro', matchType: 'Casual', region: 'NA' }
  ];

  const [filters, setFilters] = useState({
    game: [],
    skillLevel: [],
    matchType: [],
    region: [],
  });

  const [matches, setMatches] = useState(initialMatches);
  const [originalMatches, setOriginalMatches] = useState([]);

  useEffect(() => {
    setOriginalMatches(initialMatches);
  }, []);

  const handleCheckboxChange = (filterType, value) => {
    const updatedFilters = { ...filters };
    const index = updatedFilters[filterType].indexOf(value);

    if (index === -1) {
      updatedFilters[filterType].push(value);
    } else {
      updatedFilters[filterType].splice(index, 1);
    }

    setFilters(updatedFilters);
  };

  const handleSearch = () => {
    const filteredMatches = originalMatches.filter(match => {
      return (
        (filters.game.length === 0 || filters.game.includes(match.game)) &&
        (filters.skillLevel.length === 0 || filters.skillLevel.includes(match.skillLevel)) &&
        (filters.matchType.length === 0 || filters.matchType.includes(match.matchType)) &&
        (filters.region.length === 0 || filters.region.includes(match.region))
      );
    });

    setMatches(filteredMatches);
  };

  const skillLevelExplanation = {
    beginner: "New to the game, learning basics.",
    amateur: "Familiar with the game, improving skills.",
    semiPro: "Competent player with good understanding of the game.",
    pro: "Highly skilled player, often competing at a professional level."
  };

  return (
    <div className="search-matches">
      <div className="centered-section">
        <h2>Search Matches</h2>

        <div className="skill-level-explanation">
          <h3>Skill Levels Explanation</h3>
          <ul>
            <li><strong>Beginner:</strong> {skillLevelExplanation.beginner}</li>
            <li><strong>Amateur:</strong> {skillLevelExplanation.amateur}</li>
            <li><strong>Semi Pro:</strong> {skillLevelExplanation.semiPro}</li>
            <li><strong>Pro:</strong> {skillLevelExplanation.pro}</li>
          </ul>
        </div>
      </div>

      <div className="filters">
        <div className="filter-group">
          <h3>Game</h3>
          {['CS2', 'Valorant', 'Overwatch 2'].map((game) => (
            <label key={game}>
              <input
                type="checkbox"
                value={game}
                checked={filters.game.includes(game)}
                onChange={() => handleCheckboxChange('game', game)}
              />
              {game}
            </label>
          ))}
        </div>

        <div className="filter-group">
          <h3>Skill Level</h3>
          {['Beginner', 'Amateur', 'Semi-Pro', 'Pro'].map((level) => (
            <label key={level}>
              <input
                type="checkbox"
                value={level}
                checked={filters.skillLevel.includes(level)}
                onChange={() => handleCheckboxChange('skillLevel', level)}
              />
              {level}
            </label>
          ))}
        </div>

        <div className="filter-group">
          <h3>Match Type</h3>
          {['Casual', 'Ranked', 'Custom'].map((type) => (
            <label key={type}>
              <input
                type="checkbox"
                value={type}
                checked={filters.matchType.includes(type)}
                onChange={() => handleCheckboxChange('matchType', type)}
              />
              {type}
            </label>
          ))}
        </div>

        <div className="filter-group">
          <h3>Region</h3>
          {['NA', 'EU', 'Asia'].map((region) => (
            <label key={region}>
              <input
                type="checkbox"
                value={region}
                checked={filters.region.includes(region)}
                onChange={() => handleCheckboxChange('region', region)}
              />
              {region}
            </label>
          ))}
        </div>
      </div>

      <button onClick={handleSearch}>Search</button>

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
