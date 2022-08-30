import React from "react";
import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./topnav.css";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";

import { logoutAction } from "../../redux/actions";

export default function TopNav() {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    // sending data to our api using redux
    logoutAction(dispatch);

    // const user = JSON.parse(localStorage.getItem("persist:root")).loggedUser;
    // console.log(`user: ${user === "null" ? true : false}`);

    // const loggedIn = JSON.parse(
    //   JSON.parse(localStorage.getItem("persist:root")).user
    // ).loggedUser;

    // setLogged(loggedIn ? true : false);
  

    <Navigate to="/login" replace={true} />;

    window.location.reload();
  };

  // console.log(`logged: ${logged}`);

  return (
    <div className="top__container">
      <div className="top__wrapper">
        <div className="top__left">
          <span className="logo">Dream Admin</span>
        </div>
        <div className="top__right">
          <div className="top__icons">
            <NotificationsIcon />
            <span className="icon__bag">3</span>
          </div>
          <div className="top__icons">
            <SettingsIcon />
          </div>
          <button className="top__icons">
            <LogoutIcon onClick={handleClick} />
          </button>
          <img
            src="data:image/jpeg;base64,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"
            alt=""
            className="top__avatar"
          />
        </div>
      </div>
    </div>
  );
}
