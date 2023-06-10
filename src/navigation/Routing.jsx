import React from "react";
import { Route, Routes } from 'react-router'
import { useSelector } from "react-redux";
import AuthRouting from "./AuthRouting/AuthRouting";
import PrivateRouting from "./PrivateRouting/PrivateRouting";
import { USER } from 'utils/const'
export const Routing = () => {
  const { isAuth } = useSelector((state) => state.AuthStateData)
  const user = localStorage.getItem(USER);
  return (
    <Routes>
      {isAuth || user ? <Route path="/*" element={<PrivateRouting />} /> : (
        <Route path="/*" element={<AuthRouting />} />
      )}

    </Routes>


  );
};
