/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { useEffect } from 'react'
import { createContext } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { USER } from 'utils/const'
const AuthContext = createContext()
const AuthContextProvider = ({
    children
}) => {
    const navigator = useNavigate();
    const { pathname } = useLocation()
    const { isAuth } = useSelector((state) => state.AuthStateData)
    const user = localStorage.getItem(USER);

    useEffect(() => {
        if (pathname.includes('/auth')) {
            navigator(pathname)
        }
        else if (user || isAuth) {
            navigator('/')
        }
        else {
            navigator('/auth/login')
        }
    }, [user, isAuth, pathname]);
    return (
        <AuthContext.Provider value={{}}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContextProvider;
