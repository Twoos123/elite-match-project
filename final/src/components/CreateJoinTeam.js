import React, { useState } from 'react';
import '../styles/CreateJoinTeam.css'; 

function CreateJoinTeam() {
  const [teamName, setTeamName] = useState('');
  const [games, setGames] = useState([]);
  const [skillLevels, setSkillLevels] = useState([]);
  const [regions, setRegions] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState(null); 
  const [teams, setTeams] = useState([
    { id: 1, name: 'Team A', game: 'CS2', skillLevel: 'Pro', region: 'NA', joined: false },
    { id: 2, name: 'Team B', game: 'Valorant', skillLevel: 'Amateur', region: 'EU', joined: false },
    { id: 3, name: 'Team C', game: 'Overwatch 2', skillLevel: 'Semi-Pro', region: 'Asia', joined: false },
    { id: 4, name: 'Team D', game: 'League of Legends', skillLevel: 'Beginner', region: 'NA', joined: false },
  ]);

  const [validationErrors, setValidationErrors] = useState({});

  const handleCreateTeam = () => {
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    const newTeam = {
      id: teams.length + 1,
      name: teamName,
      game: games.join(', '),
      skillLevel: skillLevels.join(', '),
      region: regions.join(', '),
      joined: false,
    };

    setTeams([...teams, newTeam]);

    setTeamName('');
    setGames([]);
    setSkillLevels([]);
    setRegions([]);

    alert(`Team ${teamName} created with skill level ${skillLevels.join(', ')}, playing ${games.join(', ')} in ${regions.join(', ')}`);
  };

  const validateForm = () => {
    const errors = {};
    if (!teamName.trim()) {
      errors.teamName = 'Team name is required';
    }
    if (games.length === 0) {
      errors.games = 'At least one game must be selected';
    }
    if (skillLevels.length === 0) {
      errors.skillLevels = 'At least one skill level must be selected';
    }
    if (regions.length === 0) {
      errors.regions = 'At least one region must be selected';
    }
    return errors;
  };

  const handleJoinToggle = (teamId) => {
    const updatedTeams = teams.map(team =>
      team.id === teamId ? { ...team, joined: !team.joined } : team
    );
    setTeams(updatedTeams);

    if (selectedTeam && selectedTeam.id === teamId) {
      setSelectedTeam(updatedTeams.find(team => team.id === teamId));
    }
  };

  const selectTeam = (team) => {
    setSelectedTeam(team);
  };

  const deleteTeam = (teamId) => {
    const updatedTeams = teams.filter(team => team.id !== teamId);
    setTeams(updatedTeams);

    if (selectedTeam && selectedTeam.id === teamId) {
      setSelectedTeam(null);
    }

    alert(`Team ${teamId} deleted successfully.`);
  };

  const handleGameChange = (game) => {
    if (games.includes(game)) {
      setGames(games.filter(g => g !== game));
    } else {
      setGames([...games, game]);
    }
  };

  const handleSkillLevelChange = (level) => {
    if (skillLevels.includes(level)) {
      setSkillLevels(skillLevels.filter(l => l !== level));
    } else {
      setSkillLevels([...skillLevels, level]);
    }
  };

  const handleRegionChange = (region) => {
    if (regions.includes(region)) {
      setRegions(regions.filter(r => r !== region));
    } else {
      setRegions([...regions, region]);
    }
  };

  const skillLevelsOptions = ['Beginner', 'Amateur', 'Semi-Pro', 'Pro'];
  const gamesOptions = ['CS2', 'Valorant', 'Overwatch 2', 'League of Legends'];
  const regionsOptions = ['NA', 'Asia', 'EU'];

  return (
    <div className="create-join-team">
      <h2>Create or Join a Team</h2>

      <div className="input-container">
        <input
          type="text"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
          placeholder="Enter team name"
        />
        {validationErrors.teamName && <p className="error">{validationErrors.teamName}</p>}
      </div>

      <div className="games-container">
        <label>Games:</label>
        {gamesOptions.map((game, index) => (
          <label key={index}>
            <input
              type="checkbox"
              checked={games.includes(game)}
              onChange={() => handleGameChange(game)}
            /> {game}
          </label>
        ))}
        {validationErrors.games && <p className="error">{validationErrors.games}</p>}
      </div>

      <div className="skills-container">
        <label>Skill Levels:</label>
        {skillLevelsOptions.map((level, index) => (
          <label key={index}>
            <input
              type="checkbox"
              checked={skillLevels.includes(level)}
              onChange={() => handleSkillLevelChange(level)}
            /> {level}
          </label>
        ))}
        {validationErrors.skillLevels && <p className="error">{validationErrors.skillLevels}</p>}
      </div>

      <div className="regions-container">
        <label>Regions:</label>
        {regionsOptions.map((region, index) => (
          <label key={index}>
            <input
              type="checkbox"
              checked={regions.includes(region)}
              onChange={() => handleRegionChange(region)}
            /> {region}
          </label>
        ))}
        {validationErrors.regions && <p className="error">{validationErrors.regions}</p>}
      </div>

      <div className="button-container">
        <button onClick={handleCreateTeam}>Create Team</button>
      </div>

      <div className="team-list">
        {teams.map(team => (
          <div key={team.id} className={`team-card ${selectedTeam && selectedTeam.id === team.id ? 'selected' : ''}`} onClick={() => selectTeam(team)}>
            <h3>{team.name}</h3>
            <p>Games: {team.game}</p>
            <p>Skill Levels: {team.skillLevel}</p>
            <p>Regions: {team.region}</p>
            {team.joined ? (
              <button onClick={() => handleJoinToggle(team.id)}>Leave</button>
            ) : (
              <button onClick={() => handleJoinToggle(team.id)}>Join</button>
            )}
            <button onClick={() => deleteTeam(team.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreateJoinTeam;
