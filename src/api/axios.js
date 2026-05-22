import axios from "axios";

const API = axios.create({
  baseURL: "https://team-task-api-production-7c6f.up.railway.app/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;
