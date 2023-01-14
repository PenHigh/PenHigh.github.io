import React from 'react';

import styles from './Member.module.css';

interface MemberProps {
  name: string;
  image: string;
  bio: string;
}

const Member = (props: MemberProps) => {
  const { name, image, bio } = props;

  return (
    <div
      className={styles.member}
    >
      <img
        src={image}
        alt={name}
        className={styles.image}
      />
      <div
        className={styles.name}
      >
        {name}
      </div>
      <div
        className={styles.bio}
      >
        -
        {' '}
        {bio}
      </div>
    </div>
  );
};

export default Member;
