import { memo } from "react"
import styles from './brand.module.css';

const Brand = () => {

    return (
        <div className={styles.container}>
            <div className={styles.container_front}>123</div>
            <div className={styles.container_back}>321</div>
        </div>
    );
};

export default memo(Brand);