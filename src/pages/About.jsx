import React from 'react';
import classes from "./About.module.css";

const About = () => {
    return (
        <div className={classes.aboutText}>
            <div className={classes.aboutHeader}>
                <h2>Hi, I am Marta.</h2>
                <h1 style={{color: 'orange'}}>Junior Front-end Developer</h1>
                <p>I am a Javascript developer with a degree in engineering.
                    <br/>
                    I would love it if you check out my projects.</p>
            </div>
            <p className={classes.aboutImg}><img src="https://www.aquariumofpacific.org/images/exhibits/Magnificent_Tree_Frog_900.jpg" alt="photo" width={'600px'}/></p>
        </div>
    );
};

export default About;