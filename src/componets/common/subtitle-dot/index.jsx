import { memo } from "react"
import styles from './subtitle.module.css';

const SubtitleDot = ({ title }) => {
    return (
        <div className={styles.container}>
            <h3 className={styles.text}>{title}</h3>
        </div>
    );
}

export default memo(SubtitleDot);