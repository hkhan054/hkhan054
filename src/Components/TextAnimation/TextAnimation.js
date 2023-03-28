import React from "react";
import "./TextAnimation.scss";

export const TextAnimation = (title) => {
    return (
        <div className="textAnimation">
            <h1>
                <span className="color">
                <span className="color-text">{title}</span>
                </span>
            </h1>
        </div>
    );
};