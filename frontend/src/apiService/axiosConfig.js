import axios from "axios";

export const axiosConfig = axios.create({
  headers: { Authorization: localStorage.getItem("token") },
});
