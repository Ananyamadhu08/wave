import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/slices/authSlice";
import alertReducer from "../features/slices/alertSlice";
import profileReducer from "../features/slices/profileSlice";
import postsReducer from "../features/slices/postSlice";
import postModalReducer from "../features/slices/postModalSlice";

const reducers = {
  auth: authReducer,
  alert: alertReducer,
  profile: profileReducer,
  posts: postsReducer,
  postModal: postModalReducer,
};

export const store = configureStore({
  reducer: reducers,
});
