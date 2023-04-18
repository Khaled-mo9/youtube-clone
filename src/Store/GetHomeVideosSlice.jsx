import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { YOUTUBE_API_URL, formatDate, headers } from "../Utils/Constants";
import { useDispatch } from "react-redux";
const YOUTUBE_KEY_API = "AIzaSyC-obCxzofU5MpNCe4qhtKmLk7KkbpWoNg";

const initialState = {
  loading: false,
  videos: [],
  videoComment: [],
  channelDetails: [],
  channelVideos: [],
  playlistVideos: [],
  currentPlaying: null,
  searchTerm: "",
  searchResults: [],
  nextPageToken: null,
  RecommendedVideos: [],
  snippet: [],
  show: false,
};

/**
 * ? get videos
 */
export const getHomePageVideos = createAsyncThunk(
  "youtubeApp/getHomePageVideos",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    console.log(thunkAPI);

    try {
      const options = {
        method: "GET",
        url: "https://youtube-v31.p.rapidapi.com/search",
        params: {
          relatedToVideoId: "7ghhRHRP6t4",
          part: "id,snippet",
          type: "video",
          maxResults: "50",
        },
        headers: headers,
      };
      const res = axios.request(options).then(function (response) {
        // console.log(response.data);
        return response.data;
      });
      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
/**
 * ? get video comments
 */
export const getComments = createAsyncThunk(
  "youtubeApp/getComments",
  async (videoId, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    console.log(thunkAPI);

    try {
      const options = {
        method: "GET",
        url: "https://youtube-v31.p.rapidapi.com/commentThreads",
        params: { part: "snippet", videoId: `${videoId}`, maxResults: "100" },
        headers: headers,
      };

      const res = axios.request(options).then(function (response) {
        // console.log(response.data);
        return response.data;
      });
      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
/**
 * ? get channel details
 */
export const getChannelDetails = createAsyncThunk(
  "youtubeApp/getChannelDetails",
  async (videoId, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    console.log(thunkAPI);

    try {
      const options = {
        method: "GET",
        url: "https://youtube-v31.p.rapidapi.com/channels",
        params: { part: "snippet,statistics", id: `${videoId}` },
        headers: headers,
      };

      const res = axios.request(options).then(function (response) {
        // console.log(response.data);
        return response.data;
      });
      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
/**
 * ? get getPlayListDetails
 */
export const getChannelVideos = createAsyncThunk(
  "youtubeApp/getChannelVideos",
  async (channelId, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    console.log(thunkAPI);

    try {
      const options = {
        method: "GET",
        url: "https://youtube-v31.p.rapidapi.com/search",
        params: {
          channelId,
          part: "snippet,id",
          order: "date",
          maxResults: "50",
        },
        headers: headers,
      };
      const res = axios.request(options).then(function (response) {
        // console.log(response.data);
        return response.data;
      });
      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
/**
 * ? get getPlayListVideos
 */
export const getPlayListVideos = createAsyncThunk(
  "youtubeApp/getPlayListVideos",
  async (playlistId, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    console.log(thunkAPI);

    try {
      const options = {
        method: "GET",
        url: "https://youtube-v31.p.rapidapi.com/playlistItems",
        params: {
          playlistId,
          part: "snippet",
          maxResults: "50",
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

const GetHomeVideosSlice = createSlice({
  name: "youtubeApp",
  initialState,
  reducers: {
    setShowSide: (state, action) => {
      state.show = action.payload;
    },
    handleSideShow: (state, action) => {
      state.show = !state.show;
    },
  },
  extraReducers: {
    [getHomePageVideos.pending]: (state, action) => {
      // console.log(action);
      state.loading = false;
    },
    [getHomePageVideos.fulfilled]: (state, action) => {
      // console.log(action);
      state.loading = true;
      state.videos = action.payload.items;
    },
    [getHomePageVideos.rejected]: (state, action) => {
      console.log(action.payload);
      state.loading = false;
    },
    //-----------------------------------------------------------------------------------------------------------
    //------------------------------------------------------------------------------------------------------------
    [getComments.pending]: (state, action) => {
      console.log(action);
      // state.loading = false;
    },
    [getComments.fulfilled]: (state, action) => {
      console.log(action);
      // state.loading = true;
      state.videoComment = action.payload.items;
      console.log("comments", state.videoComment);
    },
    [getComments.rejected]: (state, action) => {
      console.log(action.payload);
      // state.loading = false;
    },
    //-----------------------------------------------------------------------------------------------------------
    //------------------------------------------------------------------------------------------------------------
    [getChannelDetails.pending]: (state, action) => {
      console.log(action);
      // state.loading = false;
    },
    [getChannelDetails.fulfilled]: (state, action) => {
      console.log(action);
      // state.loading = true;
      state.channelDetails = action.payload.items;
    },
    [getChannelDetails.rejected]: (state, action) => {
      console.log(action.payload);
      // state.loading = false;
    },
    //-----------------------------------------------------------------------------------------------------------
    //------------------------------------------------------------------------------------------------------------
    [getChannelVideos.pending]: (state, action) => {
      console.log(action);
      // state.loading = false;
    },
    [getChannelVideos.fulfilled]: (state, action) => {
      // console.log(action);
      // state.loading = true;
      state.channelVideos = action.payload.items;
      console.log(state.playlistDetails);
    },
    [getChannelVideos.rejected]: (state, action) => {
      console.log(action.payload);
      // state.loading = false;
    },
    //-----------------------------------------------------------------------------------------------------------
    //------------------------------------------------------------------------------------------------------------
    [getPlayListVideos.pending]: (state, action) => {
      console.log(action);
      // state.loading = false;
    },
    [getPlayListVideos.fulfilled]: (state, action) => {
      console.log(action);
      // state.loading = true;
      state.playlistVideos = action.payload.items;
      console.log(state.playlistVideos);
    },
    [getPlayListVideos.rejected]: (state, action) => {
      console.log(action.payload);
      // state.loading = false;
    },
  },
});

export const { handleSideShow, setShowSide, setDateFormat } =
  GetHomeVideosSlice.actions;

export default GetHomeVideosSlice.reducer;
