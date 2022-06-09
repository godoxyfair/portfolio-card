import React from 'react';
import {Link} from "react-router-dom";
import classes from "./NavBar.module.css";
import {useMediaQuery} from "react-responsive";
import NavBarMobile from "./UI/NavBarMobile";


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
                        <NavBarMobile/>
                    </Mobile>
                </div>
    );
};

export default NavBar;