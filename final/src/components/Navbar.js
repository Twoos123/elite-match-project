import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="brand">
          <h1>EliteMatch</h1>
        </div>
        <div className="nav-items">
          <ul>
            <li><Link to="/elite-match-project">{useTranslation().t('Home')}</Link></li>
            <li><Link to="/elite-match-project/create-join-team">{useTranslation().t('Create/Join Team')}</Link></li>
            <li><Link to="/elite-match-project/analytics">{useTranslation().t('Analytics')}</Link></li>
            <li><Link to="/elite-match-project/search-matches">{useTranslation().t('Search Matches')}</Link></li>
            <li><Link to="/elite-match-project/create-tournament">{useTranslation().t('Create Tournament')}</Link></li>
            <li><Link to="/elite-match-project/FAQ">{useTranslation().t('FAQ')}</Link></li>
          </ul>
        </div>
        <LanguageSwitcher />
      </div>
    </nav>
  );
}

export default Navbar;
