import React,{useState} from "react";
import "./HomePage.scss";

import Logo from "../../Assets/background.png";

export const HomePage = () => {

    return (
        <div className="HomePage">
            <div className="textContent">
                <h1 style={{display:"inline-flex", fontSize:"80px"}}>
                    Hi, I'm &nbsp; <div className="text">Hassan Khan</div>
                </h1>
                <br/>
                <h1 style={{display:"inline-flex", fontSize:"50px"}}>
                    I &nbsp; <div className="text1">design</div>, &nbsp;
                    <div className="text2">develope</div>, &nbsp;
                    <div className="text3">sing</div>, &nbsp;& &nbsp;
                    <div className="text4">write</div>.
                </h1>
                
                <br/>
                <br/>
                <br/>
                <br/>
                
                <h6>
                    I'm a product designer and UI/UX developer based in Tucson, Arizona with experience in 
                    delivering end-to-end UI/UX design and UI/UX development.  I'm passionate about improvving the lives of
                    others through desing and am constantly looking to learn and descover new things everyday.  
                </h6>
                
            </div>
        </div>
    )
}