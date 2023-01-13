import React from 'react';

import NavBarButton from './NavBarButton/NavBarButton';
import styles from './NavBar.module.css';

const NavBar = () => (
  <nav>
    <div
      className={styles.navbar}
    >
      {/* Left side */}
      <div>
        <a
          className={styles.logo}
          href="/#"
        >
          PHS Coding Club
        </a>
      </div>
      {/* Right side */}
      <div
        className={styles.links}
      >
        <NavBarButton link="/#about">
          About
        </NavBarButton>
      </div>
    </div>
  </nav>
);

export default NavBar;
