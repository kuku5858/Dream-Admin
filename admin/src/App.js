import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";

import TopNav from "./components/top/TopNav";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import Users from "./pages/users/Users";
import SingleUser from "./pages/singleUser/SingleUser";
import NewUser from "./pages/newUser/NewUser";
import Products from "./pages/products/Products";
import EditProduct from "./pages/editProduct/EditProduct";
import AddProduct from "./pages/addProduct/AddProduct";
import Login from "./pages/login/Login";

import "./App.css";

function App() {
  // const loggedIn = JSON.parse(
  //   JSON.parse(localStorage.getItem("persist:root")).user
  // ).loggedUser;
  const loggedIn = JSON.parse(localStorage.getItem("persist:root")) !== null && JSON.parse(localStorage.getItem("persist:root")).loggedUser;
  console.log(loggedIn)

  // const persist = JSON.parse(localStorage.getItem("persist:root")).loggedUser;
  // console.log(`persist: ${persist === "null" ? true : false}`);
  // console.log(`persist: ${persist}`);

  // const admin = JSON.parse(
  //   JSON.parse(localStorage.getItem("persist:root")).user
  // ).loggedUser?.isAdmin;
  const admin = JSON.parse(loggedIn)?.isAdmin;
  console.log(admin);

  // console.log(`App ${loggedIn ? true : false}`)
  // console.log(`Logged in ${JSON.stringify(loggedIn)}`)
  // console.log(loggedIn)


  return (
    <BrowserRouter className="App">
      {loggedIn !== null && admin ? (
        <>
          <TopNav />
          <div className="container">
            <Sidebar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/users" element={<Users />} />
              <Route path="/user/:id" element={<SingleUser />} />
              <Route path="/newuser" element={<NewUser />} />
              <Route path="/products" element={<Products />} />
              <Route path="/product/:id" element={<EditProduct />} />
              <Route path="/addproduct" element={<AddProduct />} />
            </Routes>
          </div>
        </>
      ) : (
        <Login />
      )}
    </BrowserRouter>
  );
}

export default App;
