import React, {useState} from 'react';
import classes from "./NavBarMobile.module.css";
import MobMenu from "../MobMenu";

const NavBarMobile = () => {
    const [menuActive, setMenuActive] = useState(false)

    return (
        <div className={classes.mobNav}>
            <div className={classes.burgerBtn} onClick={() => setMenuActive(!menuActive)}>
                <span/>
            </div>
            <MobMenu active={menuActive} setActive={setMenuActive} header={'Menu'}/>
        </div>
    );
};

export default NavBarMobile;