import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { Route, Routes } from 'react-router'
import SignUp from "screen/Auth/SignUp/SignUp";
import WithAuthLayout from 'layout/WithAuthLayout/WithAuthLayout';
import Login from "screen/Auth/Login/Login";
import { useLocation } from 'react-router-dom';

const AuthRouting = () => {
    const navigator = useNavigate();
    const { pathname } = useLocation();
    console.log(pathname)
    useEffect(() => {
        if (pathname === "/") {
            navigator("/login")
        }
    }, [pathname, navigator])
    return (
        <Routes>
            <Route index path="/login" element={<WithAuthLayout component={Login} />} />
            <Route path="/signUp" element={<WithAuthLayout component={SignUp} />} />
        </Routes>
    )
}

export default AuthRouting
