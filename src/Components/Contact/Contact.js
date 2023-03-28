import React, { useRef, useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { TextAnimation } from "../TextAnimation/TextAnimation";
import "./Contact.scss";
import Image from "react-bootstrap/Image";
import emailjs from '@emailjs/browser';

export const Contact = () => {

    const form = useRef();
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [subject, setSubject] = useState("");
    // const [message, setMessage] = useState("")
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     console.log("it submited")
    // }

    const sendEmail = (e) => {
        e.preventDefault();
        
        emailjs.sendForm('service_hevg4mr', 'template_rpymh6w', form.current, 'lftGeTlyUhKey9g-G')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    }

    return (
        <div className="contact">
            <div className="leftPannel">
            <div className="leftContent">
            {TextAnimation("Contact")}
            <div style={{ paddingTop: "40px" }}>
            <div className="infoBundle">
            <div className="contactText">Phone:</div>
            (520)-475-9165
            </div>
            <div className="infoBundle">
            <div className="contactText">Email:</div>
            hkhan00054@gmail.com
            </div>
            {/* <div className="infoBundle">
            <div className="contactText">LinkedIn:</div>
            <a href="linkedin.ccom/in/hk786s">
                linkedin.com/in/hk786/
            </a>
            </div> */}
            </div>
            </div>
            </div>

            <div className="rightPannel">
                <div className="form">
                    <h4 style={{textAlign:"center"}}>Let's Connect</h4>

                    <form ref={form} onSubmit={sendEmail}>
                        <label style={{width:"100%"}}>
                            Name: <br/>
                            <input className="input" type="text" name="user_name"/>
                        </label>

                        <label style={{width:"100%"}}>
                            Email: <br/>
                            <input className="input" type="text" name="user_email"/>
                        </label>

                        <label style={{width:"100%"}}>
                            Subject: <br/>
                            <input className="input" type="text" name="subject"/>
                        </label>

                        <label style={{width:"100%"}}>
                            Message: <br/>
                            <textarea className="input" type="text" name="message"/>
                        </label>
                        <br/>
                        <br/>
                        <div className="buttonContainer">
                            <input className="button" type="submit" value="send"/>
                        </div>
                        

                    </form>
                </div>
            </div>
        </div>
    );
};