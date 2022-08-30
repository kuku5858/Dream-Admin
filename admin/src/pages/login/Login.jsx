import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom"

import { loginAction, logoutAction } from "../../redux/actions";

import "./login.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    //sending data to our api using redux
    loginAction(dispatch, {username, password});

    <Navigate to="/" replace={true} />
    window.location.reload();
  };

  const handleRefresh = (e) => {
    e.preventDefault();
    //sending data to our api using redux
    logoutAction(dispatch);

    <Navigate to="/" replace={true} />

    window.location.reload();
  };

  return (
    <div className="adimnlogin__container">
      <h1>ADMIN ONLY</h1>
      <form action="" className="admin__form">
        <input
          type="text"
          name="userName"
          placeholder="User name"
          required
          onChange={(e) =>
            setUsername(e.target.value)
          }
          value={username}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          onChange={(e) =>
            setPassword(e.target.value)
          }
          value={password}
        />
        <button type="submit" className="btn btn-primary" onClick={handleClick}>
          Login
        </button>
        <div className="notice">
          <small>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            ipsam ratione illum corrupti. Magni officiis non debitis adipisci
            odio assumenda exercitationem facere, doloremque possimus,
            distinctio, sit nihil dicta fugit omnis. 
            <span onClick={handleRefresh} style={{textDecoration: "underline", cursor: "pointer"}}>Refresh</span>
          </small>
        </div>
      </form>
    </div>
  );
}

// onSubmit={submitHandler} "
