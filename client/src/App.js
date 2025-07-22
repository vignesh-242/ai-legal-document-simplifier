import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [file, setFile] = useState(null);
  const [output, setOutput] = useState('');

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', file);
    const res = await axios.post('http://localhost:5000/upload', formData);
    setOutput(res.data);
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">Legal Document Simplifier</h1>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload} className="ml-2 bg-blue-500 text-white px-4 py-1 rounded">Simplify</button>
      <pre className="mt-4 bg-gray-100 p-2">{output}</pre>
    </div>
  );
}

export default App;
