import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import  {HashRouter}  from 'react-router-dom';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Contact } from "../src/Components/Contact/Contact";
import { HomePage } from "../src/Components/HomePage/HomePage";
import { About } from "../src/Components/About/About";
import { Projects } from "../src/Components/Projects/Projects";
import {ProjectLinks} from "../src/Components/ProjectLinks/ProjecctLinks";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter basename="/hkhan054">
    <App />
    <Routes>
                <Route index path="/hkhan054" element={<HomePage />} />
                <Route index path="/hkhan054/Contact" element={<Contact />} />
                <Route index path="/hkhan054/About" element={<About />} />
                <Route index path="/hkhan054/Projects" element={<Projects/>} />
                <Route index path="/KnowledgeHome" element={<ProjectLinks/>} />
            </Routes>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
