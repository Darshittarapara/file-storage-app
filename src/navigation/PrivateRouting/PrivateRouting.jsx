import AuthLayout from 'layout/AuthLayout/AuthLayout'
import React from 'react'
import { paths } from 'navigation/_path'
import { Routes, Route } from 'react-router-dom'
import Dashboard from 'screen/Dashboard/Dashboard'
import Profile from 'screen/Profile/Profile'
import Photos from 'screen/Photos/Photos'
import Videos from 'screen/Videos/Videos'
import Documents from 'screen/Documents/Documents'
import { PageNotFound } from 'screen/PageNotFound/PageNotFount'
const PrivateRouting = () => {
    return (
        <Routes>
            <Route element={<AuthLayout />}>
                <Route index element={<Dashboard />} />
                <Route path={paths.profile} element={<Profile />} />
                <Route path={paths.photos} element={<Photos />} />
                <Route path={paths.videos} element={<Videos />} />
                <Route path={paths.documents} element={<Documents />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    )
}

export default PrivateRouting