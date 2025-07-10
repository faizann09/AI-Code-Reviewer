import { useState, useEffect } from 'react';
import "prismjs/themes/prism-tomorrow.css";
import Editor from "react-simple-code-editor";
import prism from "prismjs";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import axios from 'axios';
import './App.css';

function App() {
  const [code, setCode] = useState(`function sum() {
  return 1 + 1;
}`);
  const [review, setReview] = useState(``);

  useEffect(() => {
    prism.highlightAll();
  }, []);

  async function reviewCode() {
    try {
      const response = await axios.post('https://ai-code-reviewer-f648.onrender.com/ai/getReview', { code });
      setReview(response.data);
    } catch (err) {
      setReview(" Error fetching review. Make sure backend is running and CORS is enabled.");
    }
  }

  return (
    <main>
      <div className="left">
        <div className="code-editor">
          <Editor
            value={code}
            onValueChange={code => setCode(code)}
            highlight={code =>
              prism.highlight(code, prism.languages.javascript, 'javascript')
            }
            padding={16}
            style={{
              fontFamily: '"Fira Code", monospace',
              fontSize: 14,
              minHeight: "100%",
              outline: "none"
            }}
          />
        </div>
        <button className="review-button" onClick={reviewCode}>
          🚀 Review Code
        </button>
      </div>

      <div className="review-panel">
        <div className="review-output">
          <Markdown rehypePlugins={[rehypeHighlight]}>
            {review}
          </Markdown>
        </div>
      </div>
    </main>
  );
}

export default App;
