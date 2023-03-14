import axios from "axios";

const baseURL = `${process.env.REACT_APP_BASE_URL}`;

export const axiosPublic = axios.create({
  withCredentials: true,
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});
