import React from 'react';
import classes from "./Contacts.module.css";
import github from '../componets/images/icons8-github.svg'


const Contacts = () => {
    return (
        <div className={classes.myContacts}>
            <h1 style={{ borderBottom: '2px solid orange', borderRadius: '10px', padding: '5px', margin: '5px'}}>Contacts</h1>
            <p>You can contact me <a className="contactLink"
                                     href="mailto:maigumenova@gmail.com">maigumenova@gmail.com</a></p>
            <p>or phone number <a className="contactLink" href="tel:+79776412167">+7(977)641-21-67</a></p>
            <h2 style={{color: 'orange'}}>Social</h2>
            <div className={classes.contactsLinks}>
            <p > <a href="https://www.facebook.com/profile.php?id=100045231307108" target="_blank" rel="noreferrer">
                <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/facebook.svg" width="60" height="60" /></a>
                <a href="https://www.github.com/godoxyfair" target="_blank" rel="noreferrer"><img src={github} width="60" height="60" /></a>
                <a href="https://www.linkedin.com/in/marta-igumenova-2302a1238/" target="_blank" rel="noreferrer">
                    <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/linkedin.svg" width="60" height="60" /></a>
            </p>
        </div>

        </div>
    );
};

export default Contacts;