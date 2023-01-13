import React from 'react';
import Link from 'next/link';

import styles from './NavBarButton.module.css';

interface NavBarButtonProps {
  children: React.ReactNode;
  link: string;
}

const NavBarButton = (props: NavBarButtonProps) => {
  const { children, link } = props;

  return (
    <Link
      href={link}
      className={styles.link}
    >
      <div
        className={styles.button}
      >
        {children}
      </div>
    </Link>
  );
};

export default NavBarButton;
