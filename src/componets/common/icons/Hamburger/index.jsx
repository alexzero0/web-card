import { memo, useMemo } from "react";
import styles from './hamburger.module.css';

const HamburgerMenu = ({ open, handleOpen }) => {
    const rotateBurger = useMemo(() => {
        return open ? '180deg' : '0deg';
    }, [open]);

    const rotateBurgerlines = useMemo(() => {
        return {
            after: {
                left: open ? '0.5em' : '0',
                top: open ? '0px' : '-1em',
                rotate: open ? '-135deg' : '0deg',
            },
            before: {
                left: open ? '0.5em' : '1em',
                top: open ? '0px' : '1em',
                rotate: open ? '135deg' : '0deg',
            },
            left: {
                after: open ? '0.5em' : '0',
                before: open ? '1em' : '0.5em',
            },
            top: {
                after: open ? '0px' : '-1em',
                before: open ? '1em' : '0px',
            },
            backgroundColor: open ? 'transparent' : 'white',
        };
    }, [open]);

    return (
        <div onClick={handleOpen} className={styles.burger} style={{ '--open-burger': rotateBurger }}>
            <div className={styles.burgerlines} style={{
                '--burgerlines-after-left': rotateBurgerlines.after.left,
                '--burgerlines-before-left': rotateBurgerlines.before.left,
                '--burgerlines-after-top': rotateBurgerlines.after.top,
                '--burgerlines-before-top': rotateBurgerlines.before.top,
                '--burgerlines-after-rotate': rotateBurgerlines.after.rotate,
                '--burgerlines-before-rotate': rotateBurgerlines.before.rotate,
                '--burgerlines-background-color': rotateBurgerlines.backgroundColor,
            }}></div>
        </div>
    )
};

export default memo(HamburgerMenu);