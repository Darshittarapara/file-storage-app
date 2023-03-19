import React from 'react';
import './Loader.scss';

export const Loader = ({ className }) => {

    return (
        <div className={`loading ${className || ""}`} ></div >
    )
}