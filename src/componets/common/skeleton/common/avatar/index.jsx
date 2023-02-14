import { memo } from 'react';
import styles from './avatar.module.css';

const SkeletonAvatar = ({ width, height }) => {
  return (
    <div
      className={styles.circle}
      style={{
        '--width': `${width}px`,
        '--height': height ? `${height}px` : `${width}px`,
      }}
    ></div>
  );
};

export default memo(SkeletonAvatar);
