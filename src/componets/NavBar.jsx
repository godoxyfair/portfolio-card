import React from 'react';
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="navbar__links">
                <Link className="link" to="/about">About</Link>
                <Link className="link" to="/stack">Stack</Link>
                <Link className="link" to="/project">Project</Link>
                <Link className="link" to="/contacts">Contacts</Link>


            </div>
        </div>
    );
};

export default NavBar;