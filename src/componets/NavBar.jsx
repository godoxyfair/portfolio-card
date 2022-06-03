import React from 'react';
import {Link} from "react-router-dom";
import classes from "./NavBar.module.css";
import {useMediaQuery} from "react-responsive";

const NavBar = () => {
    const Desktop = ({ children }) => {
        const isDesktop = useMediaQuery({ minWidth: 750 })
        return isDesktop ? children : null
    }

    const Mobile = ({ children }) => {
        const isMobile = useMediaQuery({ maxWidth: 750 })
        return isMobile ? children : null
    }

    return (
                <div className={classes.navbar}>
                    <Desktop>
                    <div className={classes.navbar__links}>
                        <Link className={classes.link} to="/about">About</Link>
                        <Link className={classes.link} to="/stack">Stack</Link>
                        <Link className={classes.link} to="/project">Project</Link>
                        <Link className={classes.link} to="/contacts">Contacts</Link>
                    </div>
                    </Desktop>
                    <Mobile>
                        <div className={classes.hamburgerMenu}>
                            <input className={classes.menuToggle} type="checkbox"/>
                            <label className={classes.menuBtn} form={classes.menuToggle}>
                                <span></span>
                            </label>
                            <div className={classes.menuBox}>
                                <Link className={classes.menuItem} to="/about">About</Link>
                                <Link className={classes.menuItem} to="/stack">Stack</Link>
                                <Link className={classes.menuItem} to="/project">Project</Link>
                                <Link className={classes.menuItem} to="/contacts">Contacts</Link>
                            </div>
                        </div>
                    </Mobile>
                </div>
    );
};

export default NavBar;