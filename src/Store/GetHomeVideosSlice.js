import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { YOUTUBE_API_URL } from '../Utils/Constants'

const YOUTUBE_KEY_API = 'AIzaSyC-obCxzofU5MpNCe4qhtKmLk7KkbpWoNg';


const initialState = {
  loading: false,
  videos: [],
  currentPlaying: null,
  searchTerm: '',
  searchResults: [],
  nextPageToken: null,
  RecommendedVideos: [],
  snippet: [],
  show: false,
}

export const getHomePageVideos = createAsyncThunk(
  'youtubeApp/getHomePageVideos',
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    console.log(thunkAPI);

    try {
      const res = await axios.get(`${YOUTUBE_API_URL}/search?maxResults=200&q="reactjs projects"&key=${YOUTUBE_KEY_API}&part=snippet&type=video`);
      console.log(res.data);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)


const GetHomeVideosSlice = createSlice({
  name: "youtubeApp",
  initialState,
  reducers: {
    setShowSide: (state, action) => {
      state.show = action.payload
    },
    handleSideShow: (state, action) => {
      state.show = !state.show
    }
  },
  extraReducers: {
    [getHomePageVideos.pending]: (state, action) => {
      console.log(action);
      state.loading = false

    },
    [getHomePageVideos.fulfilled]: (state, action) => {
      console.log(action);
      state.loading = true
      state.nextPageToken = action.payload.nextPageToken;
      state.videos = action.payload.items;

    },
    [getHomePageVideos.rejected]: (state, action) => {
      console.log(action.payload);
      state.loading = false
    }
  }
});

export const { handleSideShow, setShowSide } = GetHomeVideosSlice.actions

export default GetHomeVideosSlice.reducer