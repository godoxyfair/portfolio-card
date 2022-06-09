import React from 'react';
//import classes from "./MobMenu.module.css";
import {Link} from "react-router-dom";



const MobMenu = ({header, active, setActive}) => {
    return (
        <div className={active ? 'active  menu' : 'menu' } onClick={() => setActive(false)}>
            <div className={'menuContent'}>
                <div className={'menuHeader'}>{header}</div>
                <Link className={'link'} to="/about">About</Link>
                <Link className={'link'} to="/stack">Stack</Link>
                <Link className={'link'} to="/project">Project</Link>
                <Link className={'link'} to="/contacts">Contacts</Link>
            </div>

        </div>
    );
};


export default MobMenu;