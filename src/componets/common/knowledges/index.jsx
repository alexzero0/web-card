import { memo } from "react";
import styles from './knowledges.module.css';

const Knowledges = ({ knowledges }) => {
    return (
        <div className={styles.container}>
            <ui className={styles.ui}>
                {knowledges.map((item, index) => (
                    <li className={styles.li} key={index}>
                        <span>{item}</span>
                    </li>))}
            </ui>
        </div>
    );
};

export default memo(Knowledges);