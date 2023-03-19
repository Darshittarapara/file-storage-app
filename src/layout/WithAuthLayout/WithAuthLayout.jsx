import React from 'react'
import './WithAuthLayout.scss';
export const WithAuthLayout = ({
    component: Component
}) => {
    return (
        <div className='auth container-fluid'>
            <Component />
        </div>
    )
}

export default WithAuthLayout