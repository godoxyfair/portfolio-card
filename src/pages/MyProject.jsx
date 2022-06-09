import React from 'react';
import MyButton from "../componets/UI/button/MyButton";
import ProjectField from "../componets/UI/ProjectField";
import About from "./About";
import classes from "./MyProject.module.css";

const MyProject = () => {
    return (
        <div className={classes.myProject}>
            <ProjectField/>

        </div>
    );
};

export default MyProject;