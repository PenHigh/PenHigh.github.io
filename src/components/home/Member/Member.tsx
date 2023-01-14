import React from 'react';
import Image from 'next/image';

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
      <Image
        src={image}
        alt={name}
        width={200}
        height={200}
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
