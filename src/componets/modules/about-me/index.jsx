import { Fragment, memo } from "react";
import styles from './about.module.css';
import TitleDot from "../../common/title-dot";
import Card from '../../common/card';
import { aboutMe } from '../../constant';

const AboutMe = () => {
    return (
        <Card>
            <div className={styles.container}>
                <div className={styles.title}>
                    <TitleDot title="About Me" />
                </div>
                <div className={styles.content}>
                    <div className={styles.description}>
                        {aboutMe.description.map((item, index) => {
                            return (
                                <Fragment key={index}>
                                    <span>{item}</span>
                                    <pre />
                                </Fragment>
                            )
                        })}
                    </div>
                    <div className={styles.info}>
                        <div>
                            <span className={styles.sblue}>Age:&emsp;</span><span>{aboutMe.age}</span>
                        </div>
                        <div>
                            <span className={styles.sblue}>Email:&nbsp;</span><span className={styles.text}>{aboutMe.email}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    )
};

export default memo(AboutMe);