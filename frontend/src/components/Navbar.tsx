import React from 'react';
import '../styles/Navbar.css'; // Import your existing styles

const Navbar: React.FC = () => {
  return (
    <nav className={`horizontal-navbar`}>
      <div className="center-nav">
        <div className="nav-brand">
          <a href="/">MemoTech</a>
        </div>
        <div className="nav-tabs">
          <ul>
            <li><a href="/create-flashcards">Create Your Flashcards</a></li>
            <li><a href="/flashcard">Study Your Set</a></li>
            <li><a href="/cardsets">Find Other Flashcard Sets</a></li>
          </ul>
        </div>
        <div className="nav-buttons">
          {/* Add any additional buttons or elements here */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;