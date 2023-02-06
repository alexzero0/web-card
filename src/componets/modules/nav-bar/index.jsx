import { memo, useCallback, useState } from 'react';
import styles from './NavBar.module.css';
import { HamburgerIcon, InstagramIcon } from '../../common/icons';
import { menu } from '../../constant';

const NavBar = () => {
    const [open, setOpen] = useState(0);

    const handleOpen = useCallback(() => setOpen(prev => !prev), []);

    return (
        <header className={styles.container} style={{
            '--translate-x': open ? '0px' : '-145px'
        }}>
            <div className={styles.burger}>
                <HamburgerIcon open={open} handleOpen={handleOpen} />
            </div>
            <div className={styles.wrapper}>
                <ul className={styles.menu}>
                    {menu.map((item, index) => {
                        return (
                            <li key={index} className={styles.item}>
                                <a href={item.link}><span>{item.title}</span></a>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <InstagramIcon width='32px' fill='white' />
        </header>
    );
}

export default memo(NavBar);