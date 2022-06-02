import React, {useState} from 'react';
import MyProject from "../../pages/MyProject";
import MyButton from "./button/MyButton";

const ProjectField = (props) => {

    const [project, setProject] = useState([
        {id: 1, title: 'Stickers', body: '1 project'},
        {id: 2, title: 'Game', body: '2 project'},
        {id: 3, title: 'Trello', body: '3 project'},
    ])

    return (
        <div>
            <div style={{height: '500px', marginTop: '20px', color:'white'}}>
                {project.title}
            </div>
            <div>
                {project.body}
            </div>
        </div>
    );
};

export default ProjectField;