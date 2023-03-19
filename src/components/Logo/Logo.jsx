import React from 'react';
import './Logo.scss';
const Logo = ({
    src,
    text
}) => {
    return <div className='logo-container'>
        <img src={src} alt={text} />
        <span className='logo-title'>
            {text}
        </span>
    </div>
};
export default Logo;