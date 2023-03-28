import React,{useState} from "react";
import "./Navbar.scss";

import Logo from "../../Assets/Logo.svg";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { ProjectRoutes } from "../../Routes/Routes";
import CV from "../../Assets/resume.pdf"

export const NavigationBar = () => {
    return (
        <div className="nav">
            <div className="Navbar">
                <Navbar className="navContainer" expand="lg">
                    <Container>
                        <Navbar.Brand href="/hkhan054">
                            <img src={Logo} alt="Hassan Khan" width={"80%"}/>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                            <Nav>
                            <Nav.Link href="/Projects">
                            <div>Projects</div>
                            </Nav.Link>
                            {/* <Nav.Link href="/Skills">
                            <div>Skills</div>
                            </Nav.Link> */}
                            <Nav.Link href="/About">
                            <div>About</div>
                            </Nav.Link>
                            <a
                            download="HassanCV.pdf"
                            href={CV}
                            className="nav-link"
                            >
                            Resume
                            </a>
                            <Nav.Link href="/Contact">
                            <div>Contact</div>
                            </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <ProjectRoutes />
        </div>
    )
}


