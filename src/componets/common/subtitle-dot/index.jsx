import { memo } from "react"
import styles from './subtitle.module.css';

const SubtitleDot = ({ title }) => {
    return (
        <div className={styles.container}>
            <h3>{title}</h3>
        </div>
    );
}

export default memo(SubtitleDot);