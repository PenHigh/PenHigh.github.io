import React from 'react';

import NavBar from '../components/home/NavBar/NavBar';
import Member from '../components/home/Member/Member';
import styles from '../styles/Home.module.css';
import tobyLogo from '../public/static/members/tobycm.png';
import evanLogo from '../public/static/members/evan.png';
import MostLeVertLogo from '../public/static/members/MostLeVert_LogoVISUALCENTER.png';

const Home = () => (
  <div>
    <NavBar />

    <div className={styles.title}>
      <span>
        Welcome to the PSS Coding Club
      </span>
    </div>

    <div
      id="about"
    >
      <span className={styles.header}>
        About Us
      </span>
      <p className={styles.section}>
        The PHS Coding Club is a club that teaches students how to code and
        develop their own projects. We develop projects using a variety of
        programming languages and frameworks. We also help students learn
        how to use technology to solve problems. We meet every Tuesday and
        Thursday during lunch in room 133.
      </p>

      <span className={styles.subheader}>
        Our Mission
      </span>

      <p className={styles.section}>
        Our mission is to teach students how to code and develop their own
        projects. We also want to help students learn how to use technology
        to solve problems.
      </p>
    </div>

    <div
      id="members"
    >
      <span className={styles.header}>
        Members
      </span>
      <div
        className={styles.members}
      >
        <Member
          name="Evan"
          image={evanLogo}
          bio="I don't know how I got here"
        />
        <Member
          name="Toby"
          image={tobyLogo}
          bio="Same lmao"
        />
        <Member
          name="MostLeVert"
          image={MostLeVertLogo}
          bio="I don't like Comic Sans"
        />
      </div>
    </div>

    <div
      id="contact"
    >
      <span className={styles.header}>
        Contact
      </span>

      <p className={styles.section}>
        If you have any questions, please drop by room 133 during lunch on Tuesdays and Thursdays.
      </p>
    </div>

    <div
      id="footer"
      className={styles.footer}
    >
      <span>
        <a href="https://github.com/PenHigh/PenHigh.github.io">
          PSS Coding Club
          <img alt="" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" />
        </a>
        Penticton Secondary - Empowering Students Through Technology
      </span>
    </div>
  </div>
);

export default Home;
