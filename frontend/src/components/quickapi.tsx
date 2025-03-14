import React, { useState } from "react";
import FileUpload from "./ui/fileupload";

const QuickApi = () => {
  const [inputMethod, setInputMethod] = useState<"file" | "manual">("file");
  const [jsonInput, setJsonInput] = useState("");

  const handleSubmit = () => {
    if (inputMethod === "file") {
      alert("File will be uploaded!"); 
    } else {
      try {
        const parsedJson = JSON.parse(jsonInput);
        alert("JSON is valid!"); 
        console.log(parsedJson);
      } catch (error) {
        alert("Invalid JSON format!");
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-2xl p-8 bg-white bg-opacity-10 backdrop-blur-lg shadow-2xl rounded-xl border border-gray-700">
        
        {/* Title */}
        <h2 className="text-3xl font-semibold text-white text-center mb-6">
          QuickAPI Input
        </h2>

        {/* Toggle Switch */}
        <div className="flex items-center justify-center mb-6">
          <div className="relative inline-flex items-center cursor-pointer">
            <span className={`text-sm font-medium mr-3 ${inputMethod === "file" ? "text-white" : "text-gray-400"}`}>
              Upload File
            </span>
            <label className="relative w-14 h-7 bg-gray-700 rounded-full flex items-center">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={inputMethod === "manual"}
                onChange={() => setInputMethod(inputMethod === "file" ? "manual" : "file")}
              />
              <span
                className={`absolute w-6 h-6 bg-white rounded-full transform transition-transform duration-300 ${
                  inputMethod === "manual" ? "translate-x-7" : "translate-x-1"
                }`}
              ></span>
            </label>
            <span className={`text-sm font-medium ml-3 ${inputMethod === "manual" ? "text-white" : "text-gray-400"}`}>
              Enter Manually
            </span>
          </div>
        </div>

        {/* Input Area */}
        <div className="w-full">
          {inputMethod === "file" ? (
            <FileUpload />
          ) : (
            <textarea
              className="w-full h-40 p-4 text-white bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none resize-none"
              placeholder="Paste JSON or API Data here..."
              value={jsonInput}
              onChange={(e) => setJsonInput(e.target.value)}
            />
          )}
        </div>

        {/* Submit Button */}
        <button
          className="w-full mt-6 py-3 text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-lg transition-all"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default QuickApi;