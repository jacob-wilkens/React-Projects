import axios from "axios";

const KEY = "AIzaSyCHeqFNxFxR0oKTTdh7LmbDpXkt4zXFJ1M";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
    type: "video",
  },
});
