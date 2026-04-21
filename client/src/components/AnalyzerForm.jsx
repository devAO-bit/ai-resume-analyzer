import { useState } from "react";

function AnalyzerForm() {
  const [resume, setResume] = useState("");
  const [jobDesc, setJobDesc] = useState("");
  const [model, setModel] = useState("mistral");

  const handleSubmit = () => {
    console.log({ resume, jobDesc, model });
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
        <option value="mistral">Mistral</option>
        <option value="llama3">Llama3</option>
        <option value="gemma3:270m">gemma3:270m</option>
      </select>

      <button onClick={handleSubmit}>Analyze Resume</button>
    </div>
  );
}

export default AnalyzerForm;