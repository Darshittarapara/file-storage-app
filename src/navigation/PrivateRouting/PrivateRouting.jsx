import React from 'react'
import { Route, Routes } from 'react-router'
import { PageNotFound } from 'screen/PageNotFound/PageNotFount';
import WithAuthLayout from 'layout/WithAuthLayout/WithAuthLayout';
import Login from 'screen/Auth/Login/Login';

const PrivateRouting = () => {
    return (
        <Routes>

            <Route index path="/login" element={<WithAuthLayout component={Login} />} />
            <Route
                path="*"
                element={<PageNotFound />}
            />
        </Routes>
    )
}

export default PrivateRouting