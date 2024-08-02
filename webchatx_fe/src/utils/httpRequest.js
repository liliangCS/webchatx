import axios from "axios";

const http = axios.create({
  baseURL: "http://127.0.0.1:3000",
  timeout: 30000
});

http.interceptors.request.use((config) => {
  return config;
});

http.interceptors.response.use(async (res) => {
  return res.data;
});

export default http;
