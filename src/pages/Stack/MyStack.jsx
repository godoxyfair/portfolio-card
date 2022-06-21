import React from 'react';
import classes from "./MyStack.module.css";

const MyStack = () => {
    return (
        <div className={classes.skills}>
            <h1 style={{ borderBottom: '2px solid orange', borderRadius: '10px', padding: '5px', margin: '5px'}}>Skills</h1>
            <p>I've been learning to code for 6 month, after switching careers.</p>
            <h2 style={{color: 'orange'}}>STACK</h2>
            <p className={classes.skillsLink}>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg" width="36" height="36" alt="JavaScript" /></a>
                    <a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg" width="36" height="36" alt="HTML5" /></a>
                    <a href="src/pages/Stack/MyStack" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" width="36" height="36" alt="React" /></a>
                    <a href="src/pages/Stack/MyStack" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/vuejs-colored.svg" width="36" height="36" alt="Vue" /></a>
                    <a href="src/pages/Stack/MyStack#css" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg" width="36" height="36" alt="CSS3" /></a>
                    <a href="src/pages/Stack/MyStack" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg" width="36" height="36" alt="Bootstrap" /></a>
            </p>

        </div>
    );
};

export default MyStack;