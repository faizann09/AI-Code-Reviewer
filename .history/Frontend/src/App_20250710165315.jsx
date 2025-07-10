import { useState, useEffect } from 'react'
import "prismjs/themes/prism-tomorrow.css"
import Editor from "react-simple-code-editor"
import prism from "prismjs"
import Markdown from "react-markdown"
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import axios from 'axios'
import './App.css'

function App() {
  const [ count, setCount ] = useState(0)
  const [ code, setCode ] = useState(` function sum() {
  return 1 + 1
}`)

  const [ review, setReview ] = useState(``)

  useEffect(() => {
    prism.highlightAll()
  }, [])

  async function reviewCode() {
    const response = await axios.post('http://localhost:3000/ai/getReview', { code })
    setReview(response.data)
  }

  return (
    <>
    <main className="main-container">
  <div className="editor-panel">
    <div className="code-editor">
      <Editor
        value={code}
        onValueChange={code => setCode(code)}
        highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
        padding={16}
        style={{
          fontFamily: '"Fira Code", monospace',
          fontSize: 14,
          minHeight: "400px",
          borderRadius: "12px",
          backgroundColor: "#1e1e1e",
          color: "#ffffff"
        }}
      />
    </div>
    <button className="review-button" onClick={reviewCode}>🚀 Review Code</button>
  </div>

  <div className="review-panel">
    <Markdown rehypePlugins={[rehypeHighlight]}>
      {review}
    </Markdown>
  </div>
</main>

    </>
  )
}



export default App
