import { useState } from "react";
import { marked } from "marked";
import Prism from "prismjs";
import placeholder from "./data";
import "./App.css";

function App() {
  const [preview, setPreview] = useState(placeholder);

  marked.setOptions({
    breaks: true,
    highlight: function (code) {
      return Prism.highlight(code, Prism.languages.javascript, "javascript");
    },
  });

  const onChangeListener = ({ currentTarget }) =>
    setPreview(currentTarget.value);

  const renderer = new marked.Renderer();

  return (
    <main>
      <div className="container">
        <h2>Insert Text</h2>
        <textarea
          onChange={onChangeListener}
          value={preview}
          name="editor"
          id="editor"
          rows="10"
          type="text"
        ></textarea>
      </div>

      <div className="container">
        <h2>Preview</h2>
        <div
          id="preview"
          dangerouslySetInnerHTML={{
            __html: marked(preview, { renderer: renderer }),
          }}
        />
      </div>
    </main>
  );
}

export default App;
