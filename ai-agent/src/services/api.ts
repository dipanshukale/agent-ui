import axios from "axios";

const API = axios.create({
  baseURL: "https://backend-learning-v1.onrender.com/api/v1",
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