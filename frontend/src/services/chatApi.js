import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

export const sendMessageToApi = async (message) => {
  const response = await axios.post(`${API_URL}/api/chat`, { message });
  return response.data;
};