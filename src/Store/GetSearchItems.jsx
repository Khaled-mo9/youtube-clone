import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { YOUTUBE_API_URL } from "../Utils/Constants";
import { getComments } from "./GetHomeVideosSlice";

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
      const options = {
        method: "GET",
        url: "https://youtube-v31.p.rapidapi.com/search",
        params: {
          q: `${textSearch}`,
          part: "snippet,id",
          regionCode: "US",
          maxResults: "50",
          order: "date",
        },
        headers: {
          "X-RapidAPI-Key":
            "0f64c32ac5mshaf6a184234bfa5cp1a2428jsn5adb8d72f911",
          "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
        },
      };

      const res = axios.request(options).then(function (response) {
        return response.data;
      });
      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const getSearchedItems = createSlice({
  name: "search",
  initialState,
  reducers: {
    
  },
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
      state.loading = false;
    },
  },
});

export default getSearchedItems.reducer;
