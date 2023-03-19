import React, { Fragment } from 'react'
import MainHeader from 'components/MainHeader/MainHeader';
import { SideBar } from 'components/SideBar/SideBar'
import './AuthLayout.scss';
import { Loader } from 'components/Loader/Loader';
import { useAuthContext } from 'context/AuthContext/AuthContext';
import { useLocation } from 'react-router-dom';

export const AuthLayout = ({
    component: Component
}) => {
    const { isStartUserProfileLoad } = useAuthContext();
    const { pathname } = useLocation();
    const classes = pathname === "/" ? "" : "screen-container"
    return (
        <Fragment>
            {isStartUserProfileLoad ? <div className='loader'><Loader /></div> : (
                <Fragment>
                    <MainHeader name='tester' url='' />
                    <div className='row' >
                        <div className='col-md-3 col-lg-3 col-xl-3 col-3'>
                            <SideBar />
                        </div>
                        <div className={`col-12 col-md-9 col-xl-9 col-lg-9 ${classes}`}>
                            <Component />
                        </div>
                    </div>

                </Fragment>
            )}
        </Fragment>
    )
}

export default AuthLayout