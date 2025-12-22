import { createSlice } from "@reduxjs/toolkit";
import type { Employee } from "../../types";
import { authApi } from "../api/authAPI";
import { getCurrUser } from "../../utils/commonUtils";

interface AuthState {
  user: Employee | null;
}

const initialState: AuthState = {
  user: getCurrUser(),
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    logout(state) {
      state.user = null;
      localStorage.removeItem("user");
      sessionStorage.removeItem("user");
    },
  },

  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.signIn.matchFulfilled,
      (state, { payload }) => {
        state.user = payload.user;
      },
    );
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
