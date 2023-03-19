import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { YOUTUBE_API_URL } from "../Utils/Constants";

const YOUTUBE_KEY_API = "AIzaSyC-obCxzofU5MpNCe4qhtKmLk7KkbpWoNg";

const initialState = {
  loading: false,
  videos: [],
};

export const getSearched = createAsyncThunk(
  "search/getSearched",

  async (textSearch, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.get(
        `${YOUTUBE_API_URL}/search?maxResults=200&q=${textSearch}&key=${YOUTUBE_KEY_API}&part=snippet&type=video`
      );
      console.log("searched items", res.data);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const getSearchedItems = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: {
    [getSearched.pending]: (state, action) => {
      console.log(action);
      state.loading = false;

    },
    [getSearched.fulfilled]: (state, action) => {
      state.videos = action.payload.items;
      state.loading = true;
      console.log(action);
    },
    [getSearched.rejected]: (state, action) => {
      console.log(action);
      state.loading = false
    },
  },
});

export default getSearchedItems.reducer;
