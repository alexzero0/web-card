import { memo } from "react"
import styles from './brand.module.css';

const Brand = ({ open }) => {

    return (
        <div className={styles.container} style={{
            '--translate-x': open ? '-180px' : '0px'
        }}>
            <div className={styles.brand}>
                <div className={styles.brand_front}>
                    <div className={styles.wrapper_text}>
                        <p className={styles.spn_front}>Mi</p>
                    </div>
                </div>
                <div className={styles.brand_back}>
                    <div className={styles.wrapper_text}>
                        <span className={styles.spn_back}>dev</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(Brand);