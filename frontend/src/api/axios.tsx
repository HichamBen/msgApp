import axios from "axios";
const BASE_URL = "http://localhost:5000";

// eslint-disable-next-line react-refresh/only-export-components
export default axios.create({
  baseURL: BASE_URL,
  // withCredentials: true,
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  //  withCredentials: true,
});
