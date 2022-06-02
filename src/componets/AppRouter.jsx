import React from "react";
import {Route, Routes} from "react-router-dom";
import About from "../pages/About";
import MyStack from "../pages/MyStack";
import MyProject from "../pages/MyProject";
import Contacts from "../pages/Contacts";

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