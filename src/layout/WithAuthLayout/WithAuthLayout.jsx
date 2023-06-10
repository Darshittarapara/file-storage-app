import React from 'react'
import './WithAuthLayout.scss';
import Logo from 'components/Logo/Logo';
import logo from 'assets/image/logo.png';
import { Outlet } from 'react-router-dom';
export { logo }
export const WithAuthLayout = ({
    component: Component
}) => {
    return (
        <div className='auth container-fluid'>
            <Logo src={logo} className="login-logo" />
            <div className="auth-contain">
                <Outlet />
            </div>
        </div>
    )
}

export default WithAuthLayout