import express from "express";
import { askOllama } from "../services/ollamaService.js";

const router = express.Router();

router.post("/test", async (req, res) => {
  try {
    const { prompt } = req.body;

    const reply = await askOllama(prompt);

    res.json({ success: true, reply });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

export default router;