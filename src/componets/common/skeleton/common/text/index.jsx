import { memo } from "react";
import styles from './text.module.css';

const SkeletonText = ({ width, height=20 }) => {
    return <div className={styles.line} style={{
        '--width': width ? `${width}px` : '100%',
        '--height': `${height}px`,
    }}></div>
};

export default memo(SkeletonText);