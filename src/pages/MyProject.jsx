import React from 'react';
import MyButton from "../componets/UI/button/MyButton";
import ProjectField from "../componets/UI/ProjectField";
import About from "./About";

const MyProject = () => {
    return (
        <div>
            <ProjectField/>
            <MyButton>Preview</MyButton>
            <ProjectField/>
            <MyButton>Preview</MyButton>

        </div>
    );
};

export default MyProject;