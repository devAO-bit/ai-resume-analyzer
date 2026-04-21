import axios from "axios";

export const askOllama = async (prompt, model = "gemma:2b") => {
  const response = await axios.post(
    "http://localhost:11434/api/generate",
    {
      model,
      prompt,
      stream: false
    }
  );

  return response.data.response;
};