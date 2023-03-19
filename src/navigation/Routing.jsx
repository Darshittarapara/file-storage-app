import { getItem } from "helper/Storage";
import React, { Fragment } from "react";
import AuthRouting from "./AuthRouting/AuthRouting";
import PrivateRouting from "./PrivateRouting/PrivateRouting";

export const Routing = () => {
  const userDetails = getItem('user');

  return (
    <Fragment>
      {(userDetails) ? <PrivateRouting /> : <AuthRouting />}
    </Fragment>
  );
};
