import React, { useState } from 'react';
import '../styles/CreateTournament.css';

function CreateTournament() {
  const [tournamentDetails, setTournamentDetails] = useState({
    name: '',
    game: '',
    rules: '',
    participants: '',
    schedule: '',
  });

  const [validationErrors, setValidationErrors] = useState({});

  const handleCreateTournament = () => {
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    alert(`Tournament ${tournamentDetails.name} created!`);

    // Reset form after successful submission
    setTournamentDetails({
      name: '',
      game: '',
      rules: '',
      participants: '',
      schedule: '',
    });
  };

  const validateForm = () => {
    const errors = {};
    if (!tournamentDetails.name.trim()) {
      errors.name = 'Tournament name is required';
    }
    if (!tournamentDetails.game.trim()) {
      errors.game = 'Game title is required';
    }
    if (!tournamentDetails.rules.trim()) {
      errors.rules = 'Rules are required';
    }
    if (!tournamentDetails.participants.trim()) {
      errors.participants = 'Participants are required';
    }
    if (!tournamentDetails.schedule.trim()) {
      errors.schedule = 'Schedule is required';
    }
    return errors;
  };

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
        
        <input
          type="text"
          placeholder="Game Title"
          value={tournamentDetails.game}
          onChange={(e) => setTournamentDetails({ ...tournamentDetails, game: e.target.value })}
        />
        {validationErrors.game && <p className="error">{validationErrors.game}</p>}
        
        <input
          type="text"
          placeholder="Rules"
          value={tournamentDetails.rules}
          onChange={(e) => setTournamentDetails({ ...tournamentDetails, rules: e.target.value })}
        />
        {validationErrors.rules && <p className="error">{validationErrors.rules}</p>}
        
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
    </div>
  );
}

export default CreateTournament;
