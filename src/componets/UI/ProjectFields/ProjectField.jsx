import React, {useState} from 'react';
import project1 from '../../images/Screen Shot  AM.png'
import classes from './ProjectField.module.css';
import {useMediaQuery} from "react-responsive";

const ProjectField = (props) => {

    const [project, setProject] = useState([
        {id: 1, title: 'Stickers', body: '1 project'},
        {id: 2, title: 'Game', body: '2 project'},
        {id: 3, title: 'Trello', body: '3 project'},
    ])

    const Desktop = ({ children }) => {
        const isDesktop = useMediaQuery({ minWidth: 750 })
        return isDesktop ? children : null
    }
    //   const Tablet = ({ children }) => {
    //    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
    //    return isTablet ? children : null
    // }
    const Mobile = ({ children }) => {
        const isMobile = useMediaQuery({ maxWidth: 750 })
        return isMobile ? children : null
    }

    return (
        <div>
            <Desktop>
            <h1 className={classes.prjHeader}>Stickers</h1>
            <div style={{ marginTop: '20px', color:'white'}}>
                <div className={classes.fistPrj}>
                <p className={classes.aboutFistPrj}> I did this project while learning React. I implemented it with react-router-dom.
                    The app uploads information to the posts using JSON Placeholder, splits all the uploaded posts into 10 pages.
                    Each post can be deleted and comments on it can be viewed. You can also create a new post and add it to the page.
                    Sorting and searching is implemented in the app. The application is decomposed into different components of React. </p>
                <a href="src/componets/UI/ProjectFields/ProjectField" target="_blank" rel="noreferrer">
                    <img className={classes.fistImg} src={project1} width="450" height="383" /></a>
                </div>
                </div>
            </Desktop>
            <Mobile>
                <h1 className={classes.prjHeader}>Stickers</h1>
                <div style={{ color:'white'}}>
                    <div className={classes.fistPrjMobile}>
                        <p className={classes.aboutFistPrjMobile}>I did this project while learning React. I implemented it with react-router-dom.
                            The app uploads information to the posts using JSON Placeholder, splits all the uploaded posts into 10 pages.
                            Each post can be deleted and comments on it can be viewed. You can also create a new post and add it to the page.
                            Sorting and searching is implemented in the app. The application is decomposed into different components of React. </p>
                        <a href="src/componets/UI/ProjectFields/ProjectField" target="_blank" rel="noreferrer">
                            <img className={classes.fistImgMobile} src={project1} width="300" height="255" /></a>
                    </div>
                </div>
            </Mobile>

        </div>
    );
};

export default ProjectField;