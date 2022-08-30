import React, { useEffect, useState } from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import "./widgetOne.css";
import { userReq } from "../../requestMethod";

export default function WidgetOne() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const displayUsers = async () => {
      try {
        const res = await userReq.get("users/?new=true");
        setUsers(res.data);
      } catch {}
    };
    displayUsers();
  }, []);

  return (
    <div className="widgetone__container">
      <h3 className="widgetone__title">New Users</h3>

      <ul className="widgetone__ul">
        {users.map((user) => (
          <li key={user._id} className="widgetone__list">
            <img
              src={
                user.image ||
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOfKtjOuZjeC0z-i5ht_V7yPc0-sF9e6uJsg&usqp=CAU"
              }
              alt={user.username}
              className="widgetone__avatar"
            />
            <div className="widgetone__user">
              <span className="wo__username">
                {user.firstName + " " + user.lastName}
              </span>
              <span className="wo__usertitle">{user.email}</span>
            </div>
            <button className="wo__button">
              <RemoveRedEyeIcon className="wo__icons" /> Details
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
