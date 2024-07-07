import React from 'react';
import { FaGamepad, FaUsers, FaTrophy } from 'react-icons/fa';
import cs2Logo from '../images/cs2logo.svg';
import valorantLogo from '../images/vallogo.svg';
import lolLogo from '../images/lollogo.svg';
import overwatchLogo from '../images/ow2logo.svg';
import '../styles/Homepage.css';

function Homepage() {
  return (
    <div className="homepage">

      <div className="header">
        <h2>Welcome to <span className="brand">EliteMatch</span></h2>
        <p>Premium eSports matchmaking for serious gamers. Connect, compete, and improve.</p>
      </div>

      <div className="features">
        <div className="feature">
          <FaGamepad className="icon" />
          <h3>Connect</h3>
          <p>Connect with fellow gamers who share your passion.</p>
        </div>
        <div className="feature">
          <FaUsers className="icon" />
          <h3>Compete</h3>
          <p>Compete in tournaments and challenges to showcase your skills.</p>
        </div>
        <div className="feature">
          <FaTrophy className="icon" />
          <h3>Improve</h3>
          <p>Improve your gameplay with insights from advanced analytics.</p>
        </div>
      </div>

      <div className="game-cards-section">
        <h2>Games on Our Platform</h2>
        <div className="game-cards">
          {/* CS2 */}
          <div className="game-card">
            <img src={cs2Logo} alt="CS2 Logo" className="game-logo" />
            <h3>CS2</h3>
            <p>Premier first-person shooter with a competitive edge.</p>
          </div>
          
          {/* Valorant */}
          <div className="game-card">
            <img src={valorantLogo} alt="Valorant Logo" className="game-logo" />
            <h3>Valorant</h3>
            <p>Strategic shooter that blends precision and tactics.</p>
          </div>
          
          {/* League of Legends */}
          <div className="game-card">
            <img src={lolLogo} alt="League of Legends Logo" className="game-logo" />
            <h3>League of Legends</h3>
            <p>Multiplayer online battle arena game with diverse champions.</p>
          </div>
          
          {/* Overwatch 2 */}
          <div className="game-card">
            <img src={overwatchLogo} alt="Overwatch 2 Logo" className="game-logo" />
            <h3>Overwatch 2</h3>
            <p>Team-based shooter emphasizing teamwork and strategy.</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Homepage;
