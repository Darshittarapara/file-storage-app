import React from "react";
import { Route, Routes } from 'react-router'
import { PageNotFound } from 'screen/PageNotFound/PageNotFount';
import WithAuthLayout from 'layout/WithAuthLayout/WithAuthLayout';
import AuthLayout from 'layout/AuthLayout/AuthLayout';
import Home from 'screen/Home/Home';
import VerifyEmail from 'screen/Auth/VerifyEmail/VerifyEmail';
import LoginWithEmailLink from 'screen/Auth/LoginWithEmailLink/LoginWithEmailLink';
import SignUp from "screen/Auth/SignUp/SignUp";
import Login from "screen/Auth/Login/Login";

export const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={<AuthLayout component={Home} />} />
      <Route path="/login" element={<WithAuthLayout component={Login} />} />
      <Route path="/signUp" element={<WithAuthLayout component={SignUp} />} />
      <Route
        path="/verification"
        element={<WithAuthLayout
          component={VerifyEmail} />}
      />
      <Route
        path="/loginWithEmail"
        element={<WithAuthLayout
          component={LoginWithEmailLink} />}
      />
      <Route
        path="*"
        element={<PageNotFound />}
      />
    </Routes>
  );
};
