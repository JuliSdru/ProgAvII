import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
    BrowserRouter, Routes,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Navigation from './components/Navigation';
import Principal from './components/Principal';
import Climate from './components/Climate';

import { ClimatePage } from './pages/ClimatePage';
import { PrincipalPage } from './pages/PrincipalPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <App />
    </div>

);



