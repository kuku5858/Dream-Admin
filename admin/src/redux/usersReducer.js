import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    loading: false,
    error: false,
  },
  reducers: {
    //Get all
    getAllUsersRequest: (state) => {
      state.loading = true;
      state.error = false;
    },
    getAllUsersSuccess: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    getAllUsersFail: (state) => {
      state.loading = false;
      state.error = true;
    },

    //Delete
    deleteUserRequest: (state) => {
      state.loading = true;
      state.error = false;
    },
    deleteUserSuccess: (state, action) => {
      state.loading = false;
      state.users.splice(
        state.users.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteUserFail: (state) => {
      state.loading = false;
      state.error = true;
    },

    //Update
    updateUserRequest: (state) => {
      state.loading = true;
      state.error = false;
    },
    updateUserSuccess: (state, action) => {
      state.loading = false;
      state.users[
        state.users.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.user;
    },
    updateUserFail: (state) => {
      state.loading = false;
      state.error = true;
    },

    //Add
    addUserRequest: (state) => {
      state.loading = true;
      state.error = false;
    },
    addUserSuccess: (state, action) => {
      state.loading = false;
      state.products.push(action.payload);
    },
    addUserFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  getAllUsersRequest,
  getAllUsersSuccess,
  getAllUsersFail,
  deleteUserRequest,
  deleteUserSuccess,
  deleteUserFail,
  updateUserRequest,
  updateUserSuccess,
  updateUserFail,
  addUserRequest,
  addUserSuccess,
  addUserFail,
} = usersSlice.actions;

export default usersSlice.reducer;
