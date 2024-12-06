import axios from "axios";

const reactenv = import.meta.env.VITE_REACT_APP_API_URL;

const api = axios.create({
  baseURL: `${reactenv}`,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
