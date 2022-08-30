import React from "react";
import { Link, useParams } from "react-router-dom"
import { useSelector } from "react-redux";
import PersonIcon from "@mui/icons-material/Person";
import MailIcon from "@mui/icons-material/Mail";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import "./singleUser.css";



export default function SingleUser() {
  const params = useParams();
  const user = useSelector((state) =>
    state.users.users.find((u) => u._id === params.id)
  );

  return (
    <div className="singleuser__container">
      <div className="singleuser__header">
        <h1>Edit User</h1>
        <Link to={"/newuser"}>
        <button className="singleuser__button">Create</button>
        </Link>
      </div>
      <div className="display__user">
        <div className="user__detail">
          <div className="userdetail__top">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFqCCPaO3bPD5f7gbTyZ5MBb9Q1wFuQDxdhA&usqp=CAU"
              alt=""
              className="singleuser__avatar"
            />
            <div className="user__info">
              <span className="user__name">{user.username}</span>
              <span className="user__fullname">{user.firstName} {user.lastName}</span>
            </div>
          </div>
          <div className="userdetail__button">
            <span className="account__details">User Information</span>
            <div className="userdetail__info">
              <PersonIcon className="userdetail_icon" />
              <span className="userinfo">Account Details</span>
            </div>
            <div className="userdetail__info">
              <MailIcon className="userdetail_icon" />
              <span className="userinfo">{user.email}</span>
            </div>
            <div className="userdetail__info">
              <PermContactCalendarIcon className="userdetail_icon" />
              <span className="userinfo">{user.createdAt}</span>
            </div>
            <div className="userdetail__info">
              <AdminPanelSettingsIcon className="userdetail_icon" />
              <span className="userinfo">{user.isAdmin ? "Admin" : "Not Admin" }</span>
            </div>
          </div>
        </div>

        <div className="user__edit">
          <span className="useredit__title">Edit</span>
          <form className="useredit__form">
            <div className="useredit__items">
              <label>Username</label>
              <input
                type="text"
                name="username"
                placeholder={user.username}
                className="useredit__input"
              />
            </div>
            <div className="useredit__items">
              <label>Firstname</label>
              <input
                type="text"
                name="firstName"
                placeholder={user.firstName}
                className="useredit__input"
              />
            </div>
            <div className="useredit__items">
              <label>Lastname</label>
              <input
                type="text"
                name="lastName"
                placeholder={user.lastName}
                className="useredit__input"
              />
            </div>
            <div className="useredit__items">
              <label>Email</label>
              <input
                type="text"
                name="email"
                placeholder={user.email}
                className="useredit__input"
              />
            </div>
            <button className="useredit__btn">Update</button>
          </form>
        </div>
      </div>
    </div>
  );
}
