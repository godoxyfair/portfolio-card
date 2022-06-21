import React from 'react';
import {BrowserRouter as Router, HashRouter} from "react-router-dom";
import './App.css';
import NavBar from "./componets/UI/NavBar/NavBar";
import AppRouter from "./componets/AppRouter";

function App() {
      return (
          <HashRouter>
            <NavBar/>
            <AppRouter/>
          </HashRouter>
      );
    }

export default App;
