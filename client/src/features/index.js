import {
  loginUser,
  refreshToken,
  registerUser,
  logoutUser,
} from "./actions/authActions";

import {
  setLoadingProfile,
  setFollowUser,
  setUnFollowUser,
  setUpdateProfilePost,
} from "./slices/profileSlice";

import {
  getUser,
  updateUserProfileInfo,
  followUser,
  unFollowUser,
  getSuggestions,
} from "./actions/profileActions";

// exports
export {
  loginUser,
  refreshToken,
  registerUser,
  logoutUser,
  getUser,
  updateUserProfileInfo,
  followUser,
  unFollowUser,
  getSuggestions,
  setLoadingProfile,
  setFollowUser,
  setUnFollowUser,
  setUpdateProfilePost,
};
