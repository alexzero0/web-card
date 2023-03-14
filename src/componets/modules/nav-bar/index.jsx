import { memo } from 'react';
import styles from './navbar.module.css';
import { HamburgerIcon } from '../../common/icons';
import { menu } from '../../constant';
import SocialNetworks from '../../common/social-networks';
import Copyright from '../../common/copyright';

const NavBar = ({ open, handleOpen, handleScrollTo }) => {
  return (
    <header className={styles.container}>
      <div className={styles.burger}>
        <HamburgerIcon open={open} handleOpen={handleOpen} />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.wrapper_title}>
          <h2 className={styles.title}>Aleksander</h2>
          <h2 className={styles.title}>Mishenin</h2>
        </div>
        <div className={styles.wrapper_subtitle}>
          <h4 className={styles.subtitle}>
            Web&nbsp;<span className={styles.spn}>dev</span>eloper
          </h4>
        </div>
        <div className={styles.wrapper_menu}>
          <ul className={styles.menu}>
            {menu.map((item, index) => {
              return (
                <li key={index} className={styles.item}>
                  <a
                    href={item.link}
                    onClick={(e) => handleScrollTo(e, item.scrollTo)}
                  >
                    <span>{item.title}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styles.wrapper_social}>
          <SocialNetworks />
        </div>
        <div>
          <Copyright className={styles.copyright} />
        </div>
      </div>
    </header>
  );
};

export default memo(NavBar);
