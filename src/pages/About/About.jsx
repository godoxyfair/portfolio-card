import React from 'react';
import classes from "./About.module.css";
import myFoto from '../../componets/images/myfoto1.png'
import { useMediaQuery } from 'react-responsive'

const About = () => {
    const Desktop = ({ children }) => {
        const isDesktop = useMediaQuery({ minWidth: 750 })
        return isDesktop ? children : null
    }
   //   const Tablet = ({ children }) => {
    //    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
    //    return isTablet ? children : null
   // }
    const Mobile = ({ children }) => {
        const isMobile = useMediaQuery({ maxWidth: 400 })
        return isMobile ? children : null
    }
   // const Default = ({ children }) => {
    //    const isNotMobile = useMediaQuery({ minWidth: 768 })
   //     return isNotMobile ? children : null
   // }

    return (
        <div>
        <Desktop>
        <div className={classes.aboutText}>
            <div className={classes.aboutHeader}>
                <h2 style={{borderBottom: '2px solid orange', borderRadius: '10px'}}>Hi, I am Marta.</h2>
                <h1 style={{color: 'orange'}}>Junior Front-end Developer</h1>
                <p>I am a Javascript developer with a degree in engineering.
                    <br/>
                    I would love it if you check out my projects.</p>
            </div>
            <img  className={classes.aboutImg} src={myFoto} alt="photo" width={'400px'} height={'450px'}/>
        </div>
        </Desktop>
            <Mobile>
                <div className={classes.aboutTextMob}>
                    <div className={classes.aboutHeaderMob}>
                        <h2 style={{borderBottom: '2px solid orange', borderRadius: '10px'}}>Hi, I am Marta.</h2>
                        <h1 style={{color: 'orange'}}>Junior Front-end Developer</h1>
                        <p>I am a Javascript developer with a degree in engineering.
                            <br/>
                            I would love it if you check out my projects.</p>
                    </div>
                    <img  className={classes.aboutImgMob} src={myFoto} alt="photo" width={'300px'} height={'350px'}/>
                </div>
            </Mobile>

        </div>
    );
};

export default About;