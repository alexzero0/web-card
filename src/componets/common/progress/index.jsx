import { memo } from 'react';
import styles from './progress.module.css';

const Progress = ({ name, value }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper_label}>
        <label>{name}</label>
        <label>{value}%</label>
      </div>
      <div className={styles.progress}>
        <div
          className={styles.scale}
          style={{
            '--value': `${value}%`,
          }}
        />
      </div>
      {/* <progress className={styles.progress} value={value} max={100} /> */}
    </div>
  );
};

export default memo(Progress);
