import express from "express";
import { askOllama } from "../services/ollamaService.js";

const router = express.Router();

router.post("/analyze", async (req, res) => {
  try {
    const { resume, jobDesc, model } = req.body;

    const prompt = `
You are an ATS Resume Analyzer.

Compare this Resume with Job Description.

Return in this format:

Match Score: number out of 100
Missing Skills: comma separated
Suggestions: short bullet points

Resume:
${resume}

Job Description:
${jobDesc}
`;

    const result = await askOllama(prompt, model);

    res.json({
      success: true,
      result
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

export default router;