import { AiOutlineCloudUpload } from "react-icons/ai"
import { MdClear } from "react-icons/md"
import "./dragInDrop.css"
import { useEffect, useState } from "react"

export default function DraginDrop({ fileSelected, width, height }) {
  const [files, setFiles] = useState([])

  const handleDropFile = (e) => {
    e.preventDefault()
    const droppedFiles = e.dataTransfer.files
    if (droppedFiles.length) {
      const newFiles = Array.from(droppedFiles)
      setFiles((prevFiles) => [...prevFiles, ...newFiles])
    }
  }

  const handleFileChange = (e) => {
    const selectedFiles = e.target.files
    if (selectedFiles && selectedFiles.length) {
      const newFiles = Array.from(selectedFiles)
      setFiles((prevFiles) => [...prevFiles, ...newFiles])
    }
  }

  const handleRemoveFile = (index) => setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index))

  useEffect(() => fileSelected(files), [files, fileSelected])

  return (
    <section className="drag-drop" style={{ width: width, height: height }}>
      <div
        className={`document-uploader ${files.length > 0 ? "upload-box active" : "upload-box"
          }`}
        onDrop={handleDropFile}
        onDragOver={(e) => e.preventDefault()}
      >
        <div className="upload-info">
          <AiOutlineCloudUpload />
            <div>
              <p>Drag and drop your files here!</p>
            </div>
        </div>

        <input
          type="file"
          hidden
          id="browse"
          onChange={handleFileChange}
          accept=".png, .jpg, .jpeg .pdf,.docx,.pptx,.txt,.xlsx"
          multiple
        />
        <label htmlFor="browse" className="browse-btn">
          Browse files
        </label>

        {files.length > 0 && (
          <div className="file-list">
            <div className="file-list__container">
              {files.map((file, index) => (
                <div className="file-item" key={index}>
                  <div className="file-info">
                    <p>{file.name}</p>
                  </div>
                  <div className="file-actions">
                    <MdClear onClick={() => handleRemoveFile(index)} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
