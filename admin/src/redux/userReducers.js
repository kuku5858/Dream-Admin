import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    loggedUser: null,
    loading: false,
    error: false,
  },
  reducers: {
    loginRequest: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.loggedUser = action.payload;
    },
    loginFail: (state) => {
      state.loading = false;
      state.error = true;
    },
    logout: (state) => {
      state.loggedUser = null;
      // localStorage.removeItem("persist:root");
    },
  },
});

export const { loginRequest, loginSuccess, loginFail, logout } = userSlice.actions;
export default userSlice.reducer;