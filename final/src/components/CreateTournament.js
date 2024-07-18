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

  const handleCreateTournament = () => {
    alert(`Tournament ${tournamentDetails.name} created!`);
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
        <input
          type="text"
          placeholder="Game Title"
          value={tournamentDetails.game}
          onChange={(e) => setTournamentDetails({ ...tournamentDetails, game: e.target.value })}
        />
        <input
          type="text"
          placeholder="Rules"
          value={tournamentDetails.rules}
          onChange={(e) => setTournamentDetails({ ...tournamentDetails, rules: e.target.value })}
        />
        <input
          type="text"
          placeholder="Participants"
          value={tournamentDetails.participants}
          onChange={(e) => setTournamentDetails({ ...tournamentDetails, participants: e.target.value })}
        />
        <input
          type="text"
          placeholder="Schedule"
          value={tournamentDetails.schedule}
          onChange={(e) => setTournamentDetails({ ...tournamentDetails, schedule: e.target.value })}
        />
        <button onClick={handleCreateTournament}>Create Tournament</button>
      </div>
    </div>
  );
}

export default CreateTournament;
