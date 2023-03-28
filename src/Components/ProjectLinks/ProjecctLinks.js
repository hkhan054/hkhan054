import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./ProjectLinks.scss";
import { TextAnimation } from "../TextAnimation/TextAnimation";
import Pic1 from "../../Assets/EX1.png";
import Pic2 from "../../Assets/EX2.png";
import Pic3 from "../../Assets/EX3.png";
import Pic4 from "../../Assets/EX4.png";
import Image from "react-bootstrap/Image";

export const ProjectLinks = () => {

    return(
        <div className="projectLinks">
            <div className="content">
                <div className="col text-center">
                    {TextAnimation("Knowledge Home")}
                    <h6>Responsive Web Application Desing for Credit One Bank</h6>
                </div>
                

                <div style={{width:"100vw", backgroundColor:"rgba(147, 168, 137, 0.53)", marginTop:"35px"}}>
                    
                <Row style={{width:"80%", marginLeft:"10%"}}>
                    <Col sm style={{ margin:"10px", background:"white"}}>
                        <img src={Pic1} alt="Hassan" className="img-fluid"/>
                    </Col>
                    <Col sm style={{  margin:"10px", background:"white"}}>
                        <img src={Pic2} alt="Hassan" className="img-fluid" />
                    </Col>
                    <Col sm style={{  margin:"10px", background:"white"}}>
                        <img src={Pic4} alt="Hassan" className="img-fluid" />
                    </Col>
                </Row>
                </div>
            
                <div style={{width:"100vw", marginTop:"35px"}}>
                    
                    <Row style={{width:"80%", marginLeft:"10%"}}>
                        <Col sm style={{ margin:"10px"}}>
                            <h3>My Contributions</h3> <br/>
                            <h5>Role</h5>
                            Collaborated with design team to come up with different design systems and took part 
                            in full stack design development from start to finish. Transitioning from legacy methodologies 
                            to a more modern approach. <br/> <br/>
                            <h5>Project Type</h5>
                            UI/UX Design & Research<br/> <br/>
                            <h5>Project Duration</h5>
                            June 2022 - August 2022<br/> <br/>
                            <h5>Design Tool</h5>
                            Figma
                        </Col>
                        <Col sm style={{ marginTop:"10%" }}>
                            <Image src={Pic3} alt="Express Pay Screen" className="img-fluid" style={{border:"solid 10px rgba(209, 232, 226, 0.42)",objectFit:"fill"}}/>
                        </Col>
                    </Row>
                    </div>

                    <Row style={{width:"90%", marginTop:"35px", backgroundColor:"rgba(209, 232, 226, 0.42)"}}>
                        <Col sm style={{ margin:"10px", marginLeft:"10%"}}>
                            <h3>Overview</h3>
                            The goal of the project is to redesign the current Express 
                            Pay application used by Credit One Bank. The current application is outdated and
                             requires agents to navigate through multiple applications to solve customer problems,
                              resulting in increased call times and SLAs. The project aims to create a customer-based 
                              application that uses omni-channel and offers a 360-degree customer experience. The MVP will focus 
                              on the Express Pay feature, which is a significant source of revenue for the bank. The UX team 
                              gathered information about the problems faced by customer service agents with the current application
                            and worked towards creating a user-friendly and intuitive interface.
                        </Col>
                    </Row>

                <div style={{width:"100%", marginTop:"35px"}}>
                    
                <Row style={{width:"100%"}}>
                    <Col sm style={{ margin:"10px", marginLeft:"10%"}}><h3>Research:</h3>
                    <ul>
                        <li>
                            Conducted Heuristic Analysis on existing design
                        </li>
                        <li>
                            User Interviews (1 on 1)
                        </li>
                        <li>
                            Moderated Testing
                        </li>
                        <li>
                            Questionnaires
                        </li>
                    </ul>
                    <h3>Insights and Analysis:</h3>
                    High level learning curve application is dated, hard to use unless you are highly trained. Training takes too much time and costs too much money. Not cost efficient.
Multiple applications need to be used for one process which could be streamlined better. Increases time to solve one intent, about 8-12 applications daily.
No transaction history, have to go through everything manually and find information and page refreshes after every click. No email support, only fax and physical mail documents supported.
                </Col>
                    </Row>
                </div>

                <Row style={{width:"100%", marginTop:"35px", backgroundColor:"rgba(209, 232, 226, 0.10)"}}>
                        <Col sm style={{ margin:"10px", marginLeft:"10%"}}>
                            <h3>Designing Process:</h3>
                            <h5>Key Features Added:</h5>
                            <ul>
                                <li>
                                    Filtering and Sorting Options
                                </li>
                                <li>
                                    Contributions Page (CS Call Agents, Wrtiter, Admin)
                                </li>
                                <li>
                                    Feedback system
                                </li>
                                <li>
                                    Content History Page
                                </li>
                                <li>
                                    Gamification Elements
                                </li>
                            </ul>
                        </Col>
                </Row>
            
                <Row style={{width:"100%", marginTop:"35px"}}>
                        <Col sm style={{ margin:"10px", marginLeft:"10%"}}>
                            <h3>Final Result</h3>
                            The final result was a website that effectively communicated the company's value proposition, and made it easy for users to navigate and engage with the content. The client was very satisfied with the improved user experience and the positive impact it had on their business.
                            Here are the final designs for the webpages and mobile app, after applying visual identity.
                        </Col>
                </Row>

                <Row style={{width:"100%", marginTop:"35px",paddingTop:"20px", height:"200px", backgroundColor:"rgba(209, 232, 226, 0.42)"}}>
                        <Col sm style={{ margin:"10px", marginLeft:"10%"}}>
                            <h3>Thank You</h3>
                            Thank you for reviewing my work. Any questions or confusion you can ask me and I can give you detail information. <a href="/Contact" style={{color:"#CED9DF"}}>
                                Contact
                            </a>
                        </Col>
                </Row>
            </div>
        </div>
    )
}