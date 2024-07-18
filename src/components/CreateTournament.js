import React, { useState } from 'react';
import '../styles/CreateTournament.css';

function CreateTournament() {
  const initialTournament = {
    name: '',
    games: [],
    skillLevels: [],
    regions: [],
    rules: {
      teams: false,
      schedule: false,
      prizes: false,
      streaming: false,
    },
    participants: '',
    schedule: '',
  };

  const [tournamentDetails, setTournamentDetails] = useState(initialTournament);
  const [validationErrors, setValidationErrors] = useState({});
  const [tournaments, setTournaments] = useState([
    { id: 1, name: 'Tournament A', games: ['CS2', 'Valorant'], skillLevels: ['Amateur', 'Pro'], regions: ['NA'], rules: { teams: true, schedule: true, prizes: false, streaming: true }, participants: '20 teams', schedule: 'August 15, 2024' },
    { id: 2, name: 'Tournament B', games: ['Overwatch 2'], skillLevels: ['Semi-Pro'], regions: ['EU', 'Asia'], rules: { teams: true, schedule: false, prizes: true, streaming: false }, participants: '12 teams', schedule: 'September 5, 2024' },
    { id: 3, name: 'Tournament C', games: ['League of Legends'], skillLevels: ['Pro'], regions: ['NA', 'EU'], rules: { teams: true, schedule: true, prizes: true, streaming: true }, participants: '16 teams', schedule: 'October 1, 2024' },
  ]);
  const [selectedTournament, setSelectedTournament] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleCreateTournament = () => {
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    const newTournament = {
      id: tournaments.length + 1,
      ...tournamentDetails,
    };

    setTournaments([...tournaments, newTournament]);
    setTournamentDetails(initialTournament); // Reset form fields
    setShowModal(false); // Close modal after creating tournament
  };

  const validateForm = () => {
    const errors = {};
    if (!tournamentDetails.name.trim()) {
      errors.name = 'Tournament name is required';
    }
    if (tournamentDetails.games.length === 0) {
      errors.games = 'Select at least one game';
    }
    if (tournamentDetails.skillLevels.length === 0) {
      errors.skillLevels = 'Select at least one skill level';
    }
    if (tournamentDetails.regions.length === 0) {
      errors.regions = 'Select at least one region';
    }
    if (!tournamentDetails.participants.trim()) {
      errors.participants = 'Participants are required';
    }
    if (!tournamentDetails.schedule.trim()) {
      errors.schedule = 'Schedule is required';
    }
    return errors;
  };

  const handleCheckboxChange = (type, value) => {
    switch (type) {
      case 'games':
        if (tournamentDetails.games.includes(value)) {
          setTournamentDetails({
            ...tournamentDetails,
            games: tournamentDetails.games.filter(game => game !== value),
          });
        } else {
          setTournamentDetails({
            ...tournamentDetails,
            games: [...tournamentDetails.games, value],
          });
        }
        break;
      case 'skillLevels':
        if (tournamentDetails.skillLevels.includes(value)) {
          setTournamentDetails({
            ...tournamentDetails,
            skillLevels: tournamentDetails.skillLevels.filter(level => level !== value),
          });
        } else {
          setTournamentDetails({
            ...tournamentDetails,
            skillLevels: [...tournamentDetails.skillLevels, value],
          });
        }
        break;
      case 'regions':
        if (tournamentDetails.regions.includes(value)) {
          setTournamentDetails({
            ...tournamentDetails,
            regions: tournamentDetails.regions.filter(region => region !== value),
          });
        } else {
          setTournamentDetails({
            ...tournamentDetails,
            regions: [...tournamentDetails.regions, value],
          });
        }
        break;
      case 'rules':
        const updatedRules = {
          ...tournamentDetails.rules,
          [value]: !tournamentDetails.rules[value],
        };
        setTournamentDetails({
          ...tournamentDetails,
          rules: updatedRules,
        });
        break;
      default:
        break;
    }
  };

  const handleJoinToggle = (tournamentId) => {
    const updatedTournaments = tournaments.map(tournament =>
      tournament.id === tournamentId ? { ...tournament, joined: !tournament.joined } : tournament
    );
    setTournaments(updatedTournaments);

    if (selectedTournament && selectedTournament.id === tournamentId) {
      setSelectedTournament(updatedTournaments.find(tournament => tournament.id === tournamentId));
    }
  };

  const handleDeleteTournament = (tournamentId) => {
    const updatedTournaments = tournaments.filter(tournament => tournament.id !== tournamentId);
    setTournaments(updatedTournaments);

    if (selectedTournament && selectedTournament.id === tournamentId) {
      setSelectedTournament(null);
      setShowModal(false); // Close modal if the deleted tournament was selected
    }

    alert(`Tournament ${tournamentId} deleted successfully.`);
  };

  const openModal = (tournament) => {
    setSelectedTournament(tournament);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedTournament(null);
    setShowModal(false);
  };

  const skillLevelsOptions = ['Beginner', 'Amateur', 'Semi-Pro', 'Pro'];
  const gamesOptions = ['CS2', 'Valorant', 'Overwatch 2', 'League of Legends'];
  const regionsOptions = ['NA', 'Asia', 'EU'];

  return (
    <div className="container create-tournament">
      <h2>Create a Tournament</h2>
      <div className="form-container">
        <input
          type="text"
          placeholder="Tournament Name"
          value={tournamentDetails.name}
          onChange={(e) => setTournamentDetails({ ...tournamentDetails, name: e.target.value })}
        />
        {validationErrors.name && <p className="error">{validationErrors.name}</p>}

        <div className="checkbox-container">
          <label>Games:</label>
          {gamesOptions.map((game, index) => (
            <label key={index}>
              <input
                type="checkbox"
                checked={tournamentDetails.games.includes(game)}
                onChange={() => handleCheckboxChange('games', game)}
              /> {game}
            </label>
          ))}
          {validationErrors.games && <p className="error">{validationErrors.games}</p>}
        </div>

        <div className="checkbox-container">
          <label>Skill Levels:</label>
          {skillLevelsOptions.map((level, index) => (
            <label key={index}>
              <input
                type="checkbox"
                checked={tournamentDetails.skillLevels.includes(level)}
                onChange={() => handleCheckboxChange('skillLevels', level)}
              /> {level}
            </label>
          ))}
          {validationErrors.skillLevels && <p className="error">{validationErrors.skillLevels}</p>}
        </div>

        <div className="checkbox-container">
          <label>Regions:</label>
          {regionsOptions.map((region, index) => (
            <label key={index}>
              <input
                type="checkbox"
                checked={tournamentDetails.regions.includes(region)}
                onChange={() => handleCheckboxChange('regions', region)}
              /> {region}
            </label>
          ))}
          {validationErrors.regions && <p className="error">{validationErrors.regions}</p>}
        </div>

        <div className="checkbox-container">
          <label>Rules:</label>
          <label>
            <input
              type="checkbox"
              checked={tournamentDetails.rules.teams}
              onChange={() => handleCheckboxChange('rules', 'teams')}
            /> Teams
          </label>
          <label>
            <input
              type="checkbox"
              checked={tournamentDetails.rules.schedule}
              onChange={() => handleCheckboxChange('rules', 'schedule')}
            /> Schedule
          </label>
          <label>
            <input
              type="checkbox"
              checked={tournamentDetails.rules.prizes}
              onChange={() => handleCheckboxChange('rules', 'prizes')}
            /> Prizes
          </label>
          <label>
            <input
              type="checkbox"
              checked={tournamentDetails.rules.streaming}
              onChange={() => handleCheckboxChange('rules', 'streaming')}
            /> Streaming
          </label>
        </div>

        <input
          type="text"
          placeholder="Participants"
          value={tournamentDetails.participants}
          onChange={(e) => setTournamentDetails({ ...tournamentDetails, participants: e.target.value })}
        />
        {validationErrors.participants && <p className="error">{validationErrors.participants}</p>}

        <input
          type="text"
          placeholder="Schedule"
          value={tournamentDetails.schedule}
          onChange={(e) => setTournamentDetails({ ...tournamentDetails, schedule: e.target.value })}
        />
        {validationErrors.schedule && <p className="error">{validationErrors.schedule}</p>}

        <button onClick={handleCreateTournament}>Create Tournament</button>
      </div>

      <div className="tournament-list">
        {tournaments.map(tournament => (
          <div key={tournament.id} className={`tournament-card ${selectedTournament && selectedTournament.id === tournament.id ? 'selected' : ''}`}>
            <h3 onClick={() => openModal(tournament)}>{tournament.name}</h3>
            <p>Games: {tournament.games.join(', ')}</p>
            <p>Skill Levels: {tournament.skillLevels.join(', ')}</p>
            <p>Regions: {tournament.regions.join(', ')}</p>
            <p>Participants: {tournament.participants}</p>
            <p>Schedule: {tournament.schedule}</p>
            <button onClick={() => handleJoinToggle(tournament.id)}>
              {tournament.joined ? 'Leave' : 'Join'}
            </button>
            <button onClick={() => handleDeleteTournament(tournament.id)}>Delete</button>
          </div>
        ))}
      </div>

      {showModal && selectedTournament && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>{selectedTournament.name}</h2>
            <p>Games: {selectedTournament.games.join(', ')}</p>
            <p>Skill Levels: {selectedTournament.skillLevels.join(', ')}</p>
            <p>Regions: {selectedTournament.regions.join(', ')}</p>
            <p>Participants: {selectedTournament.participants}</p>
            <p>Schedule: {selectedTournament.schedule}</p>
            <button onClick={() => handleJoinToggle(selectedTournament.id)}>
              {selectedTournament.joined ? 'Leave' : 'Join'}
            </button>
            <button onClick={() => handleDeleteTournament(selectedTournament.id)}>Delete</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CreateTournament;
