import { pubReq, userReq } from "../requestMethod";
import {
  getProductFail,
  getProductRequest,
  getProductSuccess,
  deleteProductRequest,
  deleteProductSuccess,
  deleteProductFail,
  updateProductRequest,
  updateProductSuccess,
  updateProductFail,
  addProductRequest,
  addProductSuccess,
  addProductFail,
} from "./productReducer";
import { loginFail, loginRequest, loginSuccess, logout } from "./userReducers";
import { addUserFail, addUserRequest, addUserSuccess, deleteUserFail, deleteUserRequest, deleteUserSuccess, getAllUsersFail, getAllUsersRequest, getAllUsersSuccess, updateUserFail, updateUserRequest, updateUserSuccess } from "./usersReducer";

export const loginAction = async (dispatch, user) => {
  dispatch(loginRequest());
  try {
    const res = await pubReq.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    if (err.message === 'Network Error' && !err.response) {
      console.log("Make sure API is running");
    }
    dispatch(loginFail());
    console.log(`Err response loginAction: ${err.response}`);
    
  }
};

export const logoutAction = (dispatch) => {
  dispatch(logout());
  // dispatch(localStorage.removeItem('persist:root'));
  
};

export const getProductsAction = async (dispatch) => {
  dispatch(getProductRequest());
  try {
    const res = await pubReq.get("/products");
    dispatch(getProductSuccess(res.data));
  } catch (err) {
    dispatch(getProductFail());
    console.log(`Error from userAction: ${err}`);
  }
};

export const deleteProductsAction = async (id, dispatch) => {
  dispatch(deleteProductRequest());
  try {
    const res = await userReq.delete(`/products/${id}`);
    dispatch(deleteProductSuccess(res.data));
  } catch (err) {
    dispatch(deleteProductFail());
    console.log(`Error from userAction: ${err}`);
  }
};

export const updateProductsAction = async (id, product, dispatch) => {
  dispatch(updateProductRequest());
  try {
    const res = await userReq.put(`/products/update/${id}`);
    dispatch(updateProductSuccess({id, product}));
  } catch (err) {
    dispatch(updateProductFail());
    console.log(`Error from userAction: ${err}`);
  }
};

export const addProductsAction = async (product, dispatch) => {
  dispatch(addProductRequest());
  try {
    const res = await userReq.post(`/products`, product);
    dispatch(addProductSuccess(res.data));
  } catch (err) {
    dispatch(addProductFail());
    console.log(`Error from userAction: ${err.response}`);
  }
};


export const getAllUsersAction = async (dispatch) => {
  dispatch(getAllUsersRequest());
  try {
    const res = await userReq.get("/users");
    dispatch(getAllUsersSuccess(res.data));
  } catch (err) {
    dispatch(getAllUsersFail());
    console.log(`Error from userAction: ${err}`);
  }
};

export const deleteUserAction = async (id, dispatch) => {
  dispatch(deleteUserRequest());
  try {
    const res = await userReq.delete(`/users/delete/${id}`);
    dispatch(deleteUserSuccess(res.data));
  } catch (err) {
    dispatch(deleteUserFail());
    console.log(`Error from userAction: ${err}`);
  }
};

export const updateUserAction = async (id, user, dispatch) => {
  dispatch(updateUserRequest());
  try {
    const res = await userReq.put(`/users/update/${id}`);
    dispatch(updateUserSuccess({id, user}));
  } catch (err) {
    dispatch(updateUserFail());
    console.log(`Error from userAction: ${err}`);
  }
};

export const addUserAction = async (user, dispatch) => {
  dispatch(addUserRequest());
  try {
    const res = await pubReq.post(`/auth/register`, user);
    dispatch(addUserSuccess(res.data));
  } catch (err) {
    dispatch(addUserFail());
    console.log(`Error from userAction: ${err}`);
  }
};
