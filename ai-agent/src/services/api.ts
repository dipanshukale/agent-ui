import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000/api/v1",
    withCredentials: true 
});

export const sendMessage = async (question: string) => {
  const res = await API.post("/ai/ask", {
    question,
  });

  console.log(res);
  console.log(res.data.data);
  return res.data.data;
};