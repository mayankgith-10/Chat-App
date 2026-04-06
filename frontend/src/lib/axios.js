import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://chat-app-backend-6pms.onrender.com/api",
    withCredentials: true,
})
