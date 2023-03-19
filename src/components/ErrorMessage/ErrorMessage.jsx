import React from "react";
import './ErrorMessage.css';

export const ErrorMessage = (props) => {
    return (
        <div className='error'>
            <p>
                {props.message}
            </p>
        </div>
    )
}