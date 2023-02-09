import { memo } from "react"
import styles from './title.module.css';

const TitleDot = ({ title }) => {
    return (
        <div className={styles.container}>
            <h2>{title}</h2>
        </div>
    );
}

export default memo(TitleDot);