import React, { useState } from 'react'
import './AuthLayout.scss';
import { SideBar } from 'components/SideBar/SideBar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfileAction } from 'redux/UserSlice/UserAysncThunk'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import { useEffect } from 'react';
import { Loader } from 'components/Loader/Loader';
import { auth } from 'FirebaseConfig/FireBaseConfig';
import { Outlet } from 'react-router-dom';
export const AuthLayout = ({
    component: Component
}) => {
    const { mode } = useSelector((state) => state.ToggleStateData)
    const [isToggleSideBar, setIsToggleSideBar] = useState(false);
    const dispatch = useDispatch()

    useEffect(() => {
        const currentWidth = window.innerWidth;
        if (currentWidth > 576) {
            setIsToggleSideBar(true);
        }
    }, [])
    useEffect(() => {
        dispatch(getUserProfileAction());
    }, [dispatch])
    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                },
            }),
        [mode],
    );
    const handleDrawerToggle = (e) => {
        setIsToggleSideBar((preViewState) => !preViewState)
    }

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {!auth.currentUser ? <Loader /> : (
                <div className='main'>
                    <div className='row'>
                        <div className='col-md-3 col-lg-3 col-xl-3 col-3'>
                            {isToggleSideBar ? <SideBar onClose={handleDrawerToggle} /> : (
                                <Toolbar>
                                    <IconButton
                                        color="black"
                                        aria-label="open drawer"
                                        edge="start"
                                        onClick={handleDrawerToggle}
                                        sx={{ mr: 2, display: { sm: 'none' } }}
                                    >
                                        <MenuIcon />
                                    </IconButton>
                                </Toolbar>
                            )}
                        </div>
                        <div className={`col-12 col-md-9 col-xl-9 col-lg-9`}>
                            <Outlet />
                        </div>
                    </div>
                </div>
            )}

            {/* <MainHeader name='tester' url='' /> */}


        </ThemeProvider>
    )
}

export default AuthLayout