import { memo, useCallback, useState } from 'react';
import styles from './NavBar.module.css';
import HamburgerMenu from '../../common/icons/Hamburger';

const NavBar = () => {
    const [open, setOpen] = useState(0);

    const handleOpen = useCallback(() => setOpen(prev => !prev), []);

    return (
        <header className={styles.container}>
            <div className={styles.burger}>
                <HamburgerMenu open={open} handleOpen={handleOpen} />
            </div>
        </header>
    );
}

export default memo(NavBar);