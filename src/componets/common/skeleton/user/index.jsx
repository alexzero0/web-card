import { memo } from "react";
import { Avatar, Text } from "../common";
import styles from './user.module.css';

const SkeletonUser = () => {
    return (
        <div className={styles.container}>
            <Avatar width={150} />
            <div className={styles.text}>
                <Text />
            </div>
        </div>
    );
};

export default memo(SkeletonUser);