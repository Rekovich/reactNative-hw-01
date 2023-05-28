import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

const storage = getStorage();

export const fetchUploadPhoto = createAsyncThunk("storage/fetchUploadPhoto", async (data, thunkAPI) => {
  try {
    const response = await fetch(data);
    const file = await response.blob();
    const uid = Date.now().toString();
    const storageRef = ref(storage, uid);
    await uploadBytes(storageRef, file);
    const storeLink = await getDownloadURL(ref(storageRef));

    return storeLink;
  } catch (error) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const fetchDeletePhoto = createAsyncThunk("storage/fetchDeletePhoto", async (data, thunkAPI) => {
  try {
    const photo = await fetch(data);
    const desertRef = ref(storage, photo);
    await deleteObject(desertRef);
  } catch (error) {
    return thunkAPI.rejectWithValue(e.message);
  }
});
