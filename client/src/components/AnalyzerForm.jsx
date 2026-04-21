import { useState } from "react";
import axios from "axios";

function AnalyzerForm() {
  const [resume, setResume] = useState("");
  const [jobDesc, setJobDesc] = useState("");
  const [model, setModel] = useState("mistral");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const handleSubmit = async () => {
    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:3000/api/ai/analyze",
        { resume, jobDesc, model }
      );

      setResult(res.data.result);

    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      alert("Error analyzing resume");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <textarea
        placeholder="Paste Resume..."
        value={resume}
        onChange={(e) => setResume(e.target.value)}
      />

      <textarea
        placeholder="Paste Job Description..."
        value={jobDesc}
        onChange={(e) => setJobDesc(e.target.value)}
      />

      <select value={model} onChange={(e) => setModel(e.target.value)}>
        <option value="mistral:latest">Mistral</option>
        <option value="gemma:2b">Gemma2</option>
        <option value="gemma3:270m">Gemma3</option>
      </select>

      <button onClick={handleSubmit}>
        {loading ? "Analyzing..." : "Analyze Resume"}
      </button>

      {result && (
        <div className="result-box">
          <pre>{result}</pre>
        </div>
      )}
    </div>
  );
}

export default AnalyzerForm;