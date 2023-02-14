import { memo } from 'react';
import styles from './history.module.css';

const History = ({ chainOfEvents }) => {
  return (
    <div className={styles.container}>
      {chainOfEvents.map((timeline, index) => {
        return (
          <div key={index} className={styles.timeline}>
            <div className={styles.left}>
              <h5>{timeline.year}</h5>
              <span>{timeline.place}</span>
            </div>
            <div className={styles.divider} />
            <div className={styles.right}>
              <h5>{timeline.specialization}</h5>
              <span>{timeline.description}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default memo(History);
