import { useState } from "react";

const FileUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0];

    if (uploadedFile) {
      if (uploadedFile.type === "application/json") {
        setFile(uploadedFile);
        setError(null);
      } else {
        setFile(null);
        setError("Only JSON files are allowed!");
      }
    }
  };

  const handleSubmit = () => {
    if (file) {
      alert(`Uploading: ${file.name}`);

    } else {
      setError("Please upload a JSON schema file first.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-6 rounded-lg shadow-lg max-w-md mx-auto">
      <label
        className="w-full h-40 flex flex-col items-center justify-center border-2 border-dashed border-gray-400 rounded-lg bg-white cursor-pointer hover:border-gray-600 transition-all"
      >
        <input
          type="file"
          className="hidden"
          accept="application/json"
          onChange={handleFileChange}
        />
        <div className="text-center">
          <svg
            className="w-12 h-12 text-gray-500 mx-auto"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7 16v-1a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v1m-9 4h10m-5-9v9"
            ></path>
          </svg>
          <p className="text-gray-700 mt-2">Click or drag to upload JSON</p>
          {file && (
            <p className="text-green-600 mt-2 text-sm font-medium">
              {file.name}
            </p>
          )}
          {error && (
            <p className="text-red-500 mt-2 text-sm font-medium">{error}</p>
          )}
        </div>
      </label>

      <button
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-all"
        onClick={handleSubmit}
      >
        Upload JSON Schema
      </button>
    </div>
  );
};

export default FileUpload;