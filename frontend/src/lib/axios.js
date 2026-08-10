import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://chat-app-backend-m25x.onrender.com/api",
    withCredentials: true,
})