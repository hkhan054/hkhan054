import React from "react";
import "./About.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Pic from "../../Assets/aboutMe.png";

import { TextAnimation } from "../TextAnimation/TextAnimation";

export const About = () => {
return (
<div className="about">
    <div className="content">
        <Container >
            <Row>
            <Col sx md>
            {TextAnimation("About Me")}
            <Row>
            <Col></Col>
            <Col xs={7} className="titleBorder"></Col>
            <Col></Col>
            </Row>
            <Row>
            <Col></Col>
            <Col xs={7}>/h-uh-s-AH-n kh-an-n/</Col>
            <Col></Col>
            </Row>
            <Row style={{ marginTop: "20px", marginBottom: "30px" }}>
            Hello World! I’m Hassan Khan, a Full Stack Developer and UI/UX Designer. 
            From
            microscopic organisms under the microscope to lines of code on a
            web page, I love navigating through the multiverses of logic and
            creative design to make materful eye-catiching, accessible and
            user-friendly websites and applications.
            <br />
            In an ever changing world, technologiy leads and society
            follows. The move towards increasing inclusivity and diversity
            in the industry through representation is of upmost importance
            to me. If you are in need of an innovative, task-driven
            professional with 4+ years of expereince in web desing and
            developement I am your guy to call.
            </Row>
            </Col>
            <Col sx md>
            <Image src={Pic} alt="Hassan" className="img-fluid" />
            </Col>
            </Row>
        </Container>
    </div>
</div>
);
};
