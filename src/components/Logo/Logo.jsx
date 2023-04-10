import React from 'react';
import './Logo.scss';
const Logo = ({
    src,
    className,
    text
}) => {
    return <div className={`${className || "logo-container"}`}>
        <img src={src} alt={text} />
        <span className='logo-title'>
            {text}
        </span>
    </div>
};
export default Logo;