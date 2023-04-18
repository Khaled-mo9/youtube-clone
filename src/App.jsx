import "./App.css";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Search from "./Pages/Search";
import Watch from "./Pages/Watch";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  getChannelDetails,
  getComments,
  getHomePageVideos,
  getPlayListDetails,
  getPlayListVideos,
} from "./Store/GetHomeVideosSlice";
import { getSearched } from "./Store/GetSearchItems";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import axios from "axios";
import Approutes, { ScrollToTop } from "./Approutes/Approutes";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHomePageVideos());
    dispatch(getPlayListVideos("5dcmODvrX3Q"));
    const options = {
      method: "GET",
      url: "https://youtube-v31.p.rapidapi.com/playlists",
      params: { id: "UUXODddiFFPvjfOcJn2wXCLw", part: "snippet" },
      headers: {
        "X-RapidAPI-Key": "0f64c32ac5mshaf6a184234bfa5cp1a2428jsn5adb8d72f911",
        "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
   
  }, [dispatch]);

  return (
    <div className="App">
      <Navbar />
      <Approutes />
    </div>
  );
}

export default App;
