import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Contact } from "../Components/Contact/Contact";
import { HomePage } from "../Components/HomePage/HomePage";
import { About } from "../Components/About/About";
import { Projects } from "../Components/Projects/Projects";
import {ProjectLinks} from "../Components/ProjectLinks/ProjecctLinks";

export const ProjectRoutes = React.memo(() => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index path="/hkhan054" element={<HomePage />} />
                <Route index path="/Contact" element={<Contact />} />
                <Route index path="/About" element={<About />} />
                <Route index path="/Projects" element={<Projects/>} />
                <Route index path="/KnowledgeHome" element={<ProjectLinks/>} />
            </Routes>
        </BrowserRouter>
    );
});