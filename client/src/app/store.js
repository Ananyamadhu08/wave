import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/slices/authSlice";

const reducers = {
  auth: authReducer,
};

export const store = configureStore({
  reducer: reducers,
});
