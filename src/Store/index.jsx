import { configureStore } from "@reduxjs/toolkit";
import GetHomeVideosSlice from './GetHomeVideosSlice'
import GetSearchItems from "./GetSearchItems";
const store = configureStore({
    reducer: {
        homeVideos: GetHomeVideosSlice,
        search: GetSearchItems
    }
});

export default store