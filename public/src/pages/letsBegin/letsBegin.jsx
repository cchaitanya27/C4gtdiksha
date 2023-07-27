import React from "react";
import "./style.css";
import arrow from './vector.svg'
import vector from './vector.jpg'
import logo from "./multiple-letter-0.png";
export const letsBegin = () => {
    return (
        <div className="container-main">
            <div className="div">
                <img className="multiple-letter" alt="Multiple letter" src={ logo } />
                <div className="text-wrapper">D</div>
                <div className="text-wrapper-2">iksha</div>
                <div className="text-wrapper-3">क्षा</div>
                <p className="p">Unlock a world of understanding</p>
                <div className="overlap-group">
                    <div className="text-wrapper-4">Let’s Begin</div>
                    <img className="vector" alt="Vector" src={ arrow } />
                </div>  
                <img className="element" alt="Element" src={vector} />
            </div>
        </div>
    );
};


export default letsBegin;