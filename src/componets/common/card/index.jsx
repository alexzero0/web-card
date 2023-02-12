import { memo } from "react";
import styles from './card.module.css';

const Card = ({ children }) => {
    return (
        <section className={styles.container}>
            {children}
        </section>
    );
};

export default memo(Card);