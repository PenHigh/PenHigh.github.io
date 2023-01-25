import React, { useState } from 'react';
import Link from 'next/link';

import NavBarButton from './NavBarButton/NavBarButton';
import styles from './NavBar.module.css';

const NavBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={`${styles.navbar} ${isExpanded ? styles.navbarExpanded : ''}`}>
        {/* Left Side (Logo) */}
        <div>
          <Link
            className={styles.logo}
            href="/#"
          >
            PSS Coding Club
          </Link>
        </div>
        {/* Right Side (Links) */}
        <div className={styles.links}>
          {/* Home Page Navigation */}
          <NavBarButton link="/#about">
            About
          </NavBarButton>
          <NavBarButton link="/#members">
            Members
          </NavBarButton>
          <NavBarButton link="/#contact">
            Contact
          </NavBarButton>
        </div>
        <button
          className={`${styles.hamburger} ${isExpanded ? styles.expanded : ''}`}
          type="button"
          tabIndex={0}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>
      {/* Mobile Navigation */}
      {
        isExpanded && (
          <div className={styles.mobileLinks}>
            <NavBarButton link="/#about">
              About
            </NavBarButton>
            <NavBarButton link="/#members">
              Members
            </NavBarButton>
            <NavBarButton link="/#contact">
              Contact
            </NavBarButton>
          </div>
        )
      }
    </nav>
  );
};

export default NavBar;
