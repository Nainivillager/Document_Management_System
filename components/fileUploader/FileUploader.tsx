// import { ChangeEvent, useState } from "react";
// import axios from "axios";

// type UploadStatus = "idle" | "uploading" | "success" | "error";

// export default function FileUploader() {
//   const [file, setFile] = useState<File | null>(null);
//   const [status, setStatus] = useState<UploadStatus>("idle");
//   const [uploadProgress, setUploadProgress] = useState(0);

//   function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
//     if (e.target.files) {
//       setFile(e.target.files[0]);
//     }
//   }

//   async function handleFileUpload() {
//     if (!file) return;
//     setStatus("uploading");
//     setUploadProgress(0);

//     const formData = new FormData();
//     formData.append("file", file);

//     try {
//       await axios.post("https://httpbin.org/post", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//         onUploadProgress: (ProgressEvent) => {
//           const progress = ProgressEvent.total
//             ? Math.round((ProgressEvent.loaded * 100) / ProgressEvent.total)
//             : 0;

//           setUploadProgress(progress);
//         },
//       });
//       setStatus("success");
//       setUploadProgress(100);
//     } catch {
//       setStatus("error");
//       setUploadProgress(0);
//     }
//   }

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white shadow-lg rounded-lg p-6 w-96">
//         <h2 className="text-xl font-semibold mb-4 text-center">
//           File Uploader
//         </h2>
//         <input
//           type="file"
//           onChange={handleFileChange}
//           className="mb-4 border border-gray-300 rounded p-2 w-full"
//         />
//         {file && (
//           <div className="mb-4 text-sm text-gray-700">
//             <p>
//               <strong>File Name:</strong> {file.name}
//             </p>
//             <p>
//               <strong>Size:</strong> {(file.size / 1024).toFixed(2)} KB
//             </p>
//             <p>
//               <strong>Type:</strong> {file.type}
//             </p>
//             <p>
//               <strong>Selected:</strong>{" "}
//               {new Date(file.lastModified).toLocaleString()}
//             </p>
//           </div>
//         )}

//         {status === "uploading" && (
//           <div className="space-y-2">
//             <div className="h-2.5 w-full founded-full bg-gray-200">
//               <div
//                 className="h-2.5 rounded-full bg-blue-600 transition-all duration-300"
//                 style={{ width: `${uploadProgress}%` }}
//               ></div>
//             </div>
//             <p className="text-sm text-gray-600"> {uploadProgress}% uploaded</p>
//           </div>
//         )}
//         {file && status !== "uploading" && (
//           <button
//             onClick={handleFileUpload}
//             className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out w-full"
//           >
//             Upload
//           </button>
//         )}

//         {status === "success" && (
//           <p className="text-sm text-green-600 text-center">
//             File Uploaded Successfully!
//           </p>
//         )}

//         {status === "error" && (
//           <p className="text-sm text-red-600 text-center">
//             Upload failed. Please try again.
//           </p>
//         )}
//       </div>
//     </div>
//   );
// }
import { ChangeEvent, useState } from "react";
import axios from "axios";

type UploadStatus = "idle" | "uploading" | "success" | "error";

type FileWithProgress = {
  file: File;
  progress: number;
  status: UploadStatus;
};

export default function FileUploader() {
  const [files, setFiles] = useState<FileWithProgress[]>([]);

  function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files).map((file) => ({
        file,
        progress: 0,
        status: "idle" as UploadStatus,
      }));
      setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
    }
  }

  async function handleFileUpload(fileWithProgress: FileWithProgress) {
    const { file } = fileWithProgress;
    fileWithProgress.status = "uploading" as UploadStatus;
    setFiles([...files]);

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

          fileWithProgress.progress = progress;
          setFiles([...files]);
        },
      });
      fileWithProgress.status = "success" as UploadStatus;
    } catch {
      fileWithProgress.status = "error" as UploadStatus;
    }
    setFiles([...files]);
  }

  function handleUploadAll() {
    files.forEach((fileWithProgress) => {
      if (fileWithProgress.status === "idle") {
        handleFileUpload(fileWithProgress);
      }
    });
  }

  return (
    <div className="file-uploader" style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h2 style={{ textAlign: "center" }}>File Uploader</h2>

      <div style={{ marginBottom: "20px" }}>
        <input
          type="file"
          multiple
          onChange={handleFileChange}
          style={{ width: "100%", padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }}
        />
      </div>

      {files.length > 0 && (
        <div style={{ marginBottom: "20px" }}>
          <button
            onClick={handleUploadAll}
            style={{ padding: "10px 20px", backgroundColor: "#007BFF", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}
          >
            Upload All
          </button>
        </div>
      )}

      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {files.map((fileWithProgress, index) => (
          <div
            key={index}
            style={{
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>{fileWithProgress.file.name}</span>
              <span>{(fileWithProgress.file.size / 1024).toFixed(2)} KB</span>
            </div>

            <div style={{ marginTop: "10px" }}>
              <div
                style={{
                  height: "10px",
                  backgroundColor: "#f3f3f3",
                  borderRadius: "5px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: `${fileWithProgress.progress}%`,
                    height: "100%",
                    backgroundColor: fileWithProgress.status === "success" ? "#28a745" : "#007BFF",
                    transition: "width 0.4s ease",
                  }}
                ></div>
              </div>

              <span style={{ fontSize: "12px", marginTop: "5px", display: "block" }}>
                {fileWithProgress.status === "uploading"
                  ? `${fileWithProgress.progress}% uploaded`
                  : fileWithProgress.status === "success"
                  ? "Upload successful"
                  : fileWithProgress.status === "error"
                  ? "Upload failed"
                  : "Ready to upload"}
              </span>
            </div>

            {fileWithProgress.status === "idle" && (
              <button
                onClick={() => handleFileUpload(fileWithProgress)}
                style={{
                  marginTop: "10px",
                  padding: "5px 10px",
                  backgroundColor: "#007BFF",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Upload
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
