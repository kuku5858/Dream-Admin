import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import InventoryIcon from '@mui/icons-material/Inventory';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar__container">
      <div className="sidebar__wrapper">
        <div className="sidebar__menu">
          <h3 className="sidebar__title">Dashboard</h3>
          <ul className="sidebar__ul">
            <Link to={"/"} className="link">
              <li className="sidebar__list">
                <HomeIcon className="sidebar__icons" />
                Home
              </li>
            </Link>
            <Link to={"/users"} className="link">
              <li className="sidebar__list">
                <PeopleIcon className="sidebar__icons" />
                Users
              </li>
            </Link>
            <Link to={"/newuser"} className="link">
              <li className="sidebar__list">
                <PersonAddIcon className="sidebar__icons" />
                Add New User
              </li>
            </Link>
            <Link to={"/products"} className="link">
              <li className="sidebar__list">
                <InventoryIcon className="sidebar__icons" />
                Products
              </li>
            </Link>
            <Link to={"/addproduct"} className="link">
              <li className="sidebar__list">
                <AddShoppingCartIcon className="sidebar__icons" />
                Add Product
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
