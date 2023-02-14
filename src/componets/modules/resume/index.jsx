import { memo } from 'react';
import styles from './resume.module.css';
import TitleDot from '../../common/title-dot';
import Card from '../../common/card';
import SubtitleDot from '../../common/subtitle-dot';
import History from '../../common/history';
import Skills from '../../common/skills';
import Knowledges from '../../common/knowledges';
import { educations, skills, knowledges, experience } from '../../constant';

const Resume = () => {
  return (
    <Card>
      <div className={styles.container}>
        <div className={styles.title}>
          <TitleDot title="Resume" />
        </div>
        <div className={styles.content}>
          <div className={styles.education}>
            <div className={styles.subtitle}>
              <SubtitleDot title="Education" />
            </div>
            <div>
              <History chainOfEvents={educations} />
            </div>
            <div className={styles.subtitle}>
              <SubtitleDot title="Experience" />
            </div>
            <div>
              <History chainOfEvents={experience} />
            </div>
          </div>
          <div className={styles.skills}>
            <div className={styles.subtitle}>
              <SubtitleDot title="Skills" />
            </div>
            <div>
              <Skills skills={skills} />
            </div>
            <div>
              <SubtitleDot title="Knowledges" />
            </div>
            <div>
              <Knowledges knowledges={knowledges} />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default memo(Resume);
