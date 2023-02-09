import { memo } from "react";
import styles from './card.module.css';
import TitleDot from '../title-dot';

const Card = ({ children }) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    );
};

export default memo(Card);