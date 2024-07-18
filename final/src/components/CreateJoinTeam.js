import React, { useState } from 'react';
import '../styles/CreateJoinTeam.css'; // Import CSS for CreateJoinTeam component

function CreateJoinTeam() {
  const [teamName, setTeamName] = useState('');
  const [skillLevel, setSkillLevel] = useState('');
  const [game, setGame] = useState('');
  const [region, setRegion] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGame, setSelectedGame] = useState('');
  const [selectedSkillLevel, setSelectedSkillLevel] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [teams, setTeams] = useState([
    { id: 1, name: 'Team A', game: 'CS2', skillLevel: 'Pro', region: 'NA' },
    { id: 2, name: 'Team B', game: 'Valorant', skillLevel: 'Amateur', region: 'EU' },
    { id: 3, name: 'Team C', game: 'Overwatch 2', skillLevel: 'Semi-Pro', region: 'SA' },
    { id: 4, name: 'Team D', game: 'League of Legends', skillLevel: 'Beginner', region: 'OCE' },
  ]);
  const [selectedTeam, setSelectedTeam] = useState(null); // State to track selected team

  const handleCreateTeam = () => {
    alert(`Team ${teamName} created with skill level ${skillLevel}, playing ${game} in ${region}`);
  };

  const handleJoinTeam = () => {
    if (selectedTeam) {
      alert(`Joined team: ${selectedTeam.name}`);
    } else {
      alert('Please select a team to join.');
    }
  };

  const handleSearch = () => {
    const filteredTeams = teams.filter(team =>
      team.game.includes(selectedGame) &&
      team.skillLevel.includes(selectedSkillLevel) &&
      team.region.includes(selectedRegion)
    );
    console.log(filteredTeams);
    // Perform actual search or display results
    alert('Searching for teams with selected filters');
  };

  const selectTeam = (team) => {
    setSelectedTeam(team);
  };

  const skillLevels = ['Beginner', 'Amateur', 'Semi-Pro', 'Pro'];
  const games = ['CS2', 'Valorant', 'Overwatch 2', 'League of Legends'];
  const regions = ['NA', 'SA', 'EU', 'OCE'];

  return (
    <div className="create-join-team">
      <h1>Create or Join a Team</h1>
      
      <div>
        <h2>Create a Team</h2>
        <input
          type="text"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
          placeholder="Enter team name"
        />
        <label>Skill Level:</label>
        <select value={skillLevel} onChange={(e) => setSkillLevel(e.target.value)}>
          <option value="">Select skill level</option>
          {skillLevels.map((level, index) => (
            <option key={index} value={level}>{level}</option>
          ))}
        </select>
        <label>Game:</label>
        <select value={game} onChange={(e) => setGame(e.target.value)}>
          <option value="">Select game</option>
          {games.map((game, index) => (
            <option key={index} value={game}>{game}</option>
          ))}
        </select>
        <label>Region:</label>
        <select value={region} onChange={(e) => setRegion(e.target.value)}>
          <option value="">Select region</option>
          {regions.map((region, index) => (
            <option key={index} value={region}>{region}</option>
          ))}
        </select>
        <button onClick={handleCreateTeam}>Create Team</button>
      </div>

      <div>
        <h2>Join a Team</h2>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter team name to search"
        />
        <label>Game:</label>
        <select value={selectedGame} onChange={(e) => setSelectedGame(e.target.value)}>
          <option value="">Select game</option>
          {games.map((game, index) => (
            <option key={index} value={game}>{game}</option>
          ))}
        </select>
        <label>Skill Level:</label>
        <select value={selectedSkillLevel} onChange={(e) => setSelectedSkillLevel(e.target.value)}>
          <option value="">Select skill level</option>
          {skillLevels.map((level, index) => (
            <option key={index} value={level}>{level}</option>
          ))}
        </select>
        <label>Region:</label>
        <select value={selectedRegion} onChange={(e) => setSelectedRegion(e.target.value)}>
          <option value="">Select region</option>
          {regions.map((region, index) => (
            <option key={index} value={region}>{region}</option>
          ))}
        </select>
        <button onClick={handleSearch}>Search Teams</button>
        <button onClick={handleJoinTeam}>Join Team</button>
      </div>

      <div className="team-list">
        <h2>Available Teams</h2>
        {teams.map(team => (
          <div key={team.id} className={`team-card ${selectedTeam && selectedTeam.id === team.id ? 'selected' : ''}`} onClick={() => selectTeam(team)}>
            <h3>{team.name}</h3>
            <p>Game: {team.game}</p>
            <p>Skill Level: {team.skillLevel}</p>
            <p>Region: {team.region}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreateJoinTeam;
