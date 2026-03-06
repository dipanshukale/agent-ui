import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true
});

export const sendMessage = async (question: string) => {
  const res = await API.post("/ai/ask", { question });
  return res.data.data;
};