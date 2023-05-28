import { combineReducers } from "@reduxjs/toolkit";
import authSliceReducer from "./auth/authSlice";
import postsSliceReducer from "./posts/postsSlice";
import commentsSliceReducer from "./comments/commentsSlice";

const combineReducer = combineReducers({
  auth: authSliceReducer,
  posts: postsSliceReducer,
  comments: commentsSliceReducer,
});

export default combineReducer;
