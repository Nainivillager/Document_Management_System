import { ChangeEvent, useState } from "react";
import axios from "axios";

type UploadStatus = "idle" | "uploading" | "success" | "error";

export default function FileUploader() {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<UploadStatus>("idle");
  const [uploadProgress, setUploadProgress] = useState(0);

  function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  }

  async function handleFileUpload() {
    if (!file) return;
    setStatus("uploading");
    setUploadProgress(0);

    const formData = new FormData();
    formData.append("file", file);

    try {
      await axios.post("https://httpbin.org/post", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (ProgressEvent) => {
          const progress = ProgressEvent.total
            ? Math.round((ProgressEvent.loaded * 100) / ProgressEvent.total)
            : 0;

          setUploadProgress(progress);
        },
      });
      setStatus("success");
      setUploadProgress(100);
    } catch {
      setStatus("error");
      setUploadProgress(0);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-96">
        <h2 className="text-xl font-semibold mb-4 text-center">
          File Uploader
        </h2>
        <input
          type="file"
          onChange={handleFileChange}
          className="mb-4 border border-gray-300 rounded p-2 w-full"
        />
        {file && (
          <div className="mb-4 text-sm text-gray-700">
            <p>
              <strong>File Name:</strong> {file.name}
            </p>
            <p>
              <strong>Size:</strong> {(file.size / 1024).toFixed(2)} KB
            </p>
            <p>
              <strong>Type:</strong> {file.type}
            </p>
            <p>
              <strong>Selected:</strong>{" "}
              {new Date(file.lastModified).toLocaleString()}
            </p>
          </div>
        )}

        {status === "uploading" && (
          <div className="space-y-2">
            <div className="h-2.5 w-full founded-full bg-gray-200">
              <div
                className="h-2.5 rounded-full bg-blue-600 transition-all duration-300"
                style={{ width: `${uploadProgress}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-600"> {uploadProgress}% uploaded</p>
          </div>
        )}
        {file && status !== "uploading" && (
          <button
            onClick={handleFileUpload}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out w-full"
          >
            Upload
          </button>
        )}

        {status === "success" && (
          <p className="text-sm text-green-600 text-center">
            File Uploaded Successfully!
          </p>
        )}

        {status === "error" && (
          <p className="text-sm text-red-600 text-center">
            Upload failed. Please try again.
          </p>
        )}
      </div>
    </div>
  );
}
