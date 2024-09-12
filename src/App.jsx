import { useState } from "react"
import DraginDrop from "./components/dragInDrop"

function App() {
  const [files, setFiles] = useState([])

  return (
    <>
      <DraginDrop fileSelected={setFiles} width="300px" height='400px' />
      {files.length > 0 && (
        <div>
          <h2>Files List:</h2>
          <ul>
            {files.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}

export default App
