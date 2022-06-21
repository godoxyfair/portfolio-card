import React from "react";
import {Route, Routes} from "react-router-dom";
import About from "../pages/About/About";
import MyStack from "../pages/Stack/MyStack";
import MyProject from "../pages/Project/MyProject";
import Contacts from "../pages/Contact/Contacts";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/about" element={<About/>}/>
            <Route exact path="/stack" element={<MyStack/>}/>
            <Route path="*" element={<About/>}/>
            <Route path="/project" element={<MyProject/>}/>
            <Route path="/contacts" element={<Contacts/>}/>
        </Routes>
    );
};

export default AppRouter;