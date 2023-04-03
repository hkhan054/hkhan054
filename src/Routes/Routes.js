import React from "react";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import { Contact } from "../Components/Contact/Contact";
import { HomePage } from "../Components/HomePage/HomePage";
import { About } from "../Components/About/About";
import { Projects } from "../Components/Projects/Projects";
import {ProjectLinks} from "../Components/ProjectLinks/ProjecctLinks";

export const ProjectRoutes = React.memo(() => {
    return (
        <HashRouter>
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/About" element={<About />} />
                <Route path="/Projects" element={<Projects/>} />
                <Route path="/KnowledgeHome" element={<ProjectLinks/>} />
            </Routes>
        </HashRouter>
    );
});