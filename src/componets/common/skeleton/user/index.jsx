import { memo } from 'react';
import { Avatar, Text } from '../common';
import styles from './user.module.css';

const SkeletonUser = ({ width = 200 }) => {
  return (
    <div className={styles.container}>
      <Avatar width={width} />
      <div className={styles.text}>
        <Text />
      </div>
    </div>
  );
};

export default memo(SkeletonUser);
