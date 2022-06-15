import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter, Routes,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';

import Navigation from './components/Navigation';
import Principal from './components/Principal';


import {ClimatePage} from './pages/ClimatePage';
import {PrincipalPage} from './pages/PrincipalPage';
import { WeatherListPage } from './pages/WeatherListPage';



function App() {
  return (
    <div>
        <BrowserRouter>
        <Navigation/>
            <Routes>
                <Route path="/principal" element={<PrincipalPage />} />
                <Route path="/clima" element={<ClimatePage />} />
                <Route path="/list" element={<WeatherListPage />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;