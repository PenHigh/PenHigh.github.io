import React from 'react';
import Link from 'next/link';

import NavBarButton from './NavBarButton/NavBarButton';
import styles from './NavBar.module.css';

const NavBar = () => (
  <nav>
    <div
      className={styles.navbar}
    >
      {/* Left Side (Logo) */}
      <div>
        <Link
          className={styles.logo}
          href="/#"
        >
          PHS Coding Club
        </Link>
      </div>
      {/* Right Side (Links) */}
      <div
        className={styles.links}
      >
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
    </div>
  </nav>
);

export default NavBar;
