import React from 'react';
import ProjectField from "../../componets/UI/ProjectFields/ProjectField";
import classes from "./MyProject.module.css";

const MyProject = () => {
    return (
        <div className={classes.myProject}>
            <ProjectField/>

        </div>
    );
};

export default MyProject;