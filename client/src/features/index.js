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

import { setPosts, setUpdatePost } from "./slices/postSlice";

import {
  createPost,
  getPosts,
  updatePost,
  deletePost,
  likePost,
  unlikePost,
  savePost,
  unSavePost,
  createComment,
  updateComment,
  likeComment,
  unLikeComment,
  deleteComment,
  getPost,
} from "./actions/postActions";

import { setPostModal, setEditPostModal } from "./slices/postModalSlice";

// exports
export {
  loginUser,
  refreshToken,
  registerUser,
  logoutUser,
  setLoadingProfile,
  setFollowUser,
  setUnFollowUser,
  setUpdateProfilePost,
  getUser,
  updateUserProfileInfo,
  followUser,
  unFollowUser,
  getSuggestions,
  setPosts,
  setUpdatePost,
  createPost,
  getPosts,
  updatePost,
  deletePost,
  likePost,
  unlikePost,
  savePost,
  unSavePost,
  createComment,
  updateComment,
  likeComment,
  unLikeComment,
  deleteComment,
  getPost,
  setPostModal,
  setEditPostModal,
};
