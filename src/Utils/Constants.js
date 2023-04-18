import { useDispatch } from "react-redux";

export const API_URL_KEY = "https://youtube-v31.p.rapidapi.com/"

export const endPoints = {
    homeVideos: "search",
    comments: "commentThreads",
    channels: "channels"
}

export const headers = {
    "X-RapidAPI-Key":
        "0f64c32ac5mshaf6a184234bfa5cp1a2428jsn5adb8d72f911",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
}


