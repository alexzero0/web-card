import { memo } from "react"
import styles from './social.module.css';
import { InstagramIcon, TelegramIcon, LinkedinIcon } from '../icons';


const SocialNetworks = () => {
    return (
        <div className={styles.container}>
            <ul className={styles.container__list}>
                <li>
                    <a href="#link">
                        <InstagramIcon width='32px' fill='#04b4e0' />
                    </a>
                </li>
                <li>
                    <a href="#link">
                        <TelegramIcon width='32px' fill='#04b4e0' />
                    </a>
                </li>
                <li>
                    <a href="#link">
                        <LinkedinIcon width='32px' fill='#04b4e0' />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default memo(SocialNetworks);