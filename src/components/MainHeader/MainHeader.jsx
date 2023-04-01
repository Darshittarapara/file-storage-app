import React, { Fragment, useState } from "react";
import "./MainHeader.scss";
import Card from "components/UI/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faSignOut, faUser } from "@fortawesome/free-solid-svg-icons";

const MenuBar = () => {

  return (
    <Card className="menuBar">
      <ul>
        <li>
          <FontAwesomeIcon icon={faUser} className="menu-icon" />
          <span>Profile</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faLock} className="menu-icon" />
          <span>Change password</span>
        </li>
        <li >
          <FontAwesomeIcon icon={faSignOut} className="menu-icon" />
          <span>Log out</span>
        </li>
      </ul>
    </Card>
  )
}
const MainHeader = ({
  name = "testDemo",
  url = ''
}) => {

  const [isShowMenuBar, setIsShowMenuBar] = useState(false);
  return (
    <Fragment>
      <div className="container-fluid header">
        <div className="row">
          <div className="col-6 col-md-6 col-sm-6 col-lg-6">

          </div>
          <div className="col-6 col-md-6 col-sm-6 col-lg-6 profile-container">
            <div className="float-end profile-block" onClick={() => setIsShowMenuBar((preViewState) => !preViewState)}>
              <img src={''} alt="profilePicture" />
              <span>
                Hi ! {''}
              </span>
            </div>
          </div>
        </div>

      </div>

    </Fragment>


  );
};
export default MainHeader;
