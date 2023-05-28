import { createAsyncThunk } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { app } from "../../firebase/config";

const auth = getAuth(app);

export const fetchRegisterUser = createAsyncThunk("auth/fetchRegisterUser", async (data, thunkAPI) => {
  try {
    const { email, password, login, photo } = data;
    const result = await createUserWithEmailAndPassword(auth, email, password);
    result &&
      (await updateProfile(auth.currentUser, {
        displayName: login,
        photoURL: photo,
      }));
    return result.user;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const fetchLoginUser = createAsyncThunk("auth/fetchLoginUser", async (data, thunkAPI) => {
  try {
    const { email, password } = data;
    const result = await signInWithEmailAndPassword(auth, email, password);
    return result._tokenResponse;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const fetchCurrentUser = createAsyncThunk("auth/fetchCurrentUser", async (_, thunkAPI) => {
  try {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        return user;
      }
      return null;
    });
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const fetchLogOutUser = createAsyncThunk("auth/fetchLogOutUser", async (_, thunkAPI) => {
  try {
    const result = auth.signOut();
    return result;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
