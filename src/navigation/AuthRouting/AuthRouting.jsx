import WithAuthLayout from 'layout/WithAuthLayout/WithAuthLayout'
import { paths } from 'navigation/_path'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from 'screen/Auth/Login/Login'
import SignUp from 'screen/Auth/SignUp/SignUp'

const AuthRouting = () => {

    return (
        <Routes>
            <Route element={<WithAuthLayout />}>
                <Route index element={<Login />} />
                <Route path={paths.signUp} element={<SignUp />} />
            </Route>
        </Routes>
    )
}

export default AuthRouting