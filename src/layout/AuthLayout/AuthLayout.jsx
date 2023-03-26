import React, { Fragment } from 'react'
import './AuthLayout.scss';
import { useLocation } from 'react-router-dom';

export const AuthLayout = ({
    component: Component
}) => {

    const { pathname } = useLocation();
    const classes = pathname === "/" ? "" : "screen-container"
    return (
        <Fragment>
            {/* <MainHeader name='tester' url='' /> */}
            <div className='row' >
                {/* <div className='col-md-3 col-lg-3 col-xl-3 col-3'>
                            <SideBar />
                        </div> */}
                <div className={`col-12 col-md-9 col-xl-9 col-lg-9 ${classes}`}>
                    <Component />
                </div>
            </div>

        </Fragment>
    )
}

export default AuthLayout