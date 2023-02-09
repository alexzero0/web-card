import { memo } from "react";
import { SkeletonUser } from '../../common/skeleton';
import styles from './welcome.module.css';

const Welcome = () => {
    return (
        <div className={styles.container}>
            <SkeletonUser />
        </div>
    );
};

export default memo(Welcome);