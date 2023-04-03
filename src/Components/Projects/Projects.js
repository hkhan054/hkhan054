import React from "react";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { TextAnimation } from "../TextAnimation/TextAnimation";
import Pic from '../../Assets/c1b.png';

import "./Projects.scss";


export const Projects = () => {
    return (
        <div className="projects">
            <div className="content">

            <Container className="container">
            {TextAnimation("Projects")}
                <Row>
                <Col sm style={{marginTop:"10px"}}>
                        <Card style={{ width: '100%' }} className="cardcard">
                            <div style={{margin:"10px"}}>
                                <Card.Img variant="top" src={Pic} />
                            </div>
                            <Card.Body>
                                <Card.Title>Knowledge Home</Card.Title>
                                <Card.Text>
                                Application for the customer service department to allow for customer service
                                agents to gain access to important documentations and procedures that will be used during 
                                customer interactions.  
                                </Card.Text>
                                <div className="col text-center">
                                    <Button variant="light" href="/#/KnowledgeHome">Learn More</Button>
                                </div>
                                
                            </Card.Body>
                        </Card> 
                    </Col>

                    <Col sm style={{marginTop:"10px"}}>
                        <Card style={{ width: '100%' }} className="cardcard">
                            <div style={{margin:"10px"}}>
                                <Card.Img variant="top" src={Pic} />
                            </div>
                            
                            <Card.Body>
                                <Card.Title>R.E.M.S</Card.Title>
                                <Card.Text>
                                In house application to allow for managers to grant there subordinates access to different applications that will be 
                                used within the team and also allow for easy transition for new hires and internal hires.  
                                </Card.Text>
                                <div className="col text-center">
                                    <Button variant="light">Coming Soon</Button>
                                </div>
                            </Card.Body>
                        </Card> 
                    </Col>

                    <Col sm style={{marginTop:"10px"}}>
                        <Card style={{ width: '100%' }} className="cardcard">
                            <div style={{margin:"10px"}}>
                                <Card.Img variant="top" src={Pic} />
                            </div>
                            <Card.Body>
                                <Card.Title>Express Pay</Card.Title>
                                <Card.Text>
                                Internal application for the customer service department to allow customer 
                                service agents to accept express payments from current card holders, along with making 
                                card account inquires.  
                                </Card.Text>
                                <div className="col text-center">
                                    <Button variant="light">Coming Soon</Button>
                                </div>
                            </Card.Body>
                        </Card> 
                    </Col>

                    
                </Row>
            </Container>
                
            

        
            </div>
            
        </div>
    )
}