import React, { useState } from 'react';
import { FaGamepad, FaChartBar, FaUsers } from 'react-icons/fa';
import cs2Logo from '../images/cs2logo.svg';
import valorantLogo from '../images/vallogo.svg';
import lolLogo from '../images/lollogo.svg';
import overwatchLogo from '../images/ow2logo.svg';
import '../styles/Homepage.css';

function Homepage() {
  const [selectedGame, setSelectedGame] = useState(null);

  const handleGameCardClick = (game) => {
    setSelectedGame(game);
  };

  const closeModal = () => {
    setSelectedGame(null);
  };

  const gameDetails = {
    CS2: {
      logo: cs2Logo,
      title: 'CS2',
      description: 'CS2 (Counter-Strike 2) is a premier first-person shooter (FPS) game known for its competitive edge and strategic gameplay.',
      link: 'https://www.counter-strike.net/'
    },
    Valorant: {
      logo: valorantLogo,
      title: 'Valorant',
      description: 'Valorant is a tactical first-person shooter (FPS) game developed by Riot Games. It features a blend of precise shooting mechanics and strategic team play.',
      link: 'https://playvalorant.com/'
    },
    'League of Legends': {
      logo: lolLogo,
      title: 'League of Legends',
      description: 'League of Legends (LoL) is a multiplayer online battle arena (MOBA) game where players control a "champion" with unique abilities. The game emphasizes teamwork and strategy.',
      link: 'https://na.leagueoflegends.com/'
    },
    'Overwatch 2': {
      logo: overwatchLogo,
      title: 'Overwatch 2',
      description: 'Overwatch 2 is a team-based first-person shooter (FPS) game developed by Blizzard Entertainment. It focuses on cooperative gameplay, emphasizing teamwork and hero abilities.',
      link: 'https://playoverwatch.com/'
    }
  };

  return (
    <div className="homepage container-xxl">
      <div className="header">
        <h2>Welcome to <span className="brand">EliteMatch</span></h2>
        <p>Premium eSports matchmaking for serious gamers. Connect, compete, and improve.</p>
      </div>

      <div className="features">
        <div className="feature">
          <FaUsers className="icon" />
          <h3>Connect</h3>
          <p>Connect with fellow gamers who share your passion.</p>
        </div>
        <div className="feature">
          <FaGamepad className="icon" />
          <h3>Compete</h3>
          <p>Compete in tournaments and challenges to showcase your skills.</p>
        </div>
        <div className="feature">
          <FaChartBar className="icon" />
          <h3>Improve</h3>
          <p>Improve your gameplay with insights from advanced analytics.</p>
        </div>
      </div>

      <div className="game-cards-section">
        <h2>Games on Our Platform</h2>
        <div className="game-cards">
          {Object.keys(gameDetails).map((game) => (
            <div className="game-card" key={game} onClick={() => handleGameCardClick(game)}>
              <img src={gameDetails[game].logo} alt={`${gameDetails[game].title} Logo`} className="game-logo" />
              <h3>{gameDetails[game].title}</h3>
              <p>{gameDetails[game].description}</p>
            </div>
          ))}
        </div>
      </div>

      {selectedGame && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <img src={gameDetails[selectedGame].logo} alt={`${gameDetails[selectedGame].title} Logo`} className="game-logo" />
            <h3>{gameDetails[selectedGame].title}</h3>
            <p>{gameDetails[selectedGame].description}</p>
            <a href={gameDetails[selectedGame].link} target="_blank" rel="noopener noreferrer" className="game-link">Learn more</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Homepage;
