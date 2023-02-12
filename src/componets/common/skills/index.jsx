import { memo } from "react";
import Progress from '../progress';
import styles from './skills.module.css';

const Skills = ({ skills }) => {
    return (
        <div className={styles.container}>
            {skills.map((skill, index) => {
                return (
                    <div key={index}>
                        <Progress name={skill.name} value={skill.value} />
                    </div>
                )
            })}
        </div>
    )
};

export default memo(Skills);