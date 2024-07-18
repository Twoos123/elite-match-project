import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import '../styles/Analytics.css';

function Analytics() {
  const [userName, setUserName] = useState('John Doe'); 
  const [profilePicture, setProfilePicture] = useState('default_profile.jpg'); 
  const [statistics] = useState({
    kda: 2.3,
    winRate: 58,
    matchesPlayed: 120,
    recentPerformances: [
      { id: 1, game: 'CS2', kda: 2.5, win: true },
      { id: 2, game: 'Valorant', kda: 2.1, win: false },
      { id: 3, game: 'League of Legends', kda: 2.8, win: true },
      { id: 4, game: 'Overwatch 2', kda: 1.9, win: false },
      { id: 5, game: 'CS2', kda: 3.2, win: true },
    ],
  });

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfilePicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="analytics">
      <h2>Analytics</h2>
      <div className="profile-section">
        <img src={profilePicture} alt="Profile" className="profile-picture" />
        <h2>{userName}</h2>
        <input type="file" onChange={handleProfilePictureChange} accept="image/*" />
      </div>
      
      <div className="statistics-section">
        <h2>Overall Statistics</h2>
        <div className="stats-grid">
          <div className="stat-item">
            <p>K/D/A:</p>
            <p>{statistics.kda}</p>
          </div>
          <div className="stat-item">
            <p>Win Rate:</p>
            <p>{statistics.winRate}%</p>
          </div>
          <div className="stat-item">
            <p>Matches Played:</p>
            <p>{statistics.matchesPlayed}</p>
          </div>
        </div>
      </div>

      <div className="recent-performances-section">
        <h2>Recent Performances</h2>
        <ul>
          {statistics.recentPerformances.map((performance) => (
            <li key={performance.id}>
              <p>{performance.game}: KDA {performance.kda}, {performance.win ? 'Win' : 'Loss'}</p>
            </li>
          ))}
        </ul>
      </div>

      <Link to="/elite-match-project" className="back-button">Home</Link>
    </div>
  );
}

export default Analytics;
