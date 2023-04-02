import React from 'react';
import './Loader.scss';

export const Loader = ({ className }) => {
    return (
        <div className={`spinner-box ${className || ""}`}>
            <div className="pulse-container">
                <div className="pulse-bubble pulse-bubble-1"></div>
                <div className="pulse-bubble pulse-bubble-2"></div>
                <div className="pulse-bubble pulse-bubble-3"></div>
            </div>
        </div>
    )
}