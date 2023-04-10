import React from 'react'
import { useEffect } from 'react'
import { createContext } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { USER } from 'utils/const'
const AuthContext = createContext()
const AuthContextProvider = ({
    children
}) => {
    const navigator = useNavigate();
    const { isAuth } = useSelector((state) => state.AuthStateData)
    const user = localStorage.getItem(USER);

    useEffect(() => {
        if (user || isAuth) {
            navigator('/')
        } else {
            navigator('/login')
        }
    }, [user, navigator, isAuth]);
    return (
        <AuthContext.Provider value={{}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;