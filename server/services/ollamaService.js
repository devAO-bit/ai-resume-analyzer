import axios from "axios";

export const askOllama = async (prompt) => {
  const response = await axios.post("http://localhost:11434/api/generate", {
    model: "gemma3:270m",
    prompt,
    stream: false,
  });

  return response.data.response;
};