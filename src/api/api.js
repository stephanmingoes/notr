import axios from "axios";

const API = axios.create({ baseURL: "https://notr-sc.herokuapp.com" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

export const getTask = () => API.get("/tasks");
export const createTask = (taskData) => API.post("/tasks", taskData);
export const deleteTask = (taskId) => API.delete(`/tasks/${taskId}`);
export const signin = (state) => API.post("/user/signin", state);
export const signup = (state) => API.post("/user/signup", state);
