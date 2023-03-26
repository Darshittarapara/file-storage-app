import { getItem } from "utils/Storage";
import React, { Fragment } from "react";
import AuthRouting from "./AuthRouting/AuthRouting";
import PrivateRouting from "./PrivateRouting/PrivateRouting";
import { useSelector } from "react-redux";
import { USER } from '../utils/const.js'

export const Routing = () => {
  const { isAuth } = useSelector((state) => state.AuthStateData)
  console.log(isAuth);
  const userDetails = getItem(USER);

  return (
    <Fragment>
      {(isAuth || userDetails) ? <PrivateRouting /> : <AuthRouting />}
    </Fragment>
  );
};
