import { useEffect, useState } from "react";
import { marked } from "marked";
import "./App.css";

function App() {
  const [preview, setPreview] = useState(
    "a heading element (H1 size), a sub heading element (H2 size), a link, inline code, a cod"
  );

  const onChangeListener = (e) => {
    const value = e.currentTarget.value;
    const html = marked.parse(value);

    setPreview(html);
  };

  return (
    <>
      <textarea
        onChange={onChangeListener}
        name="editor"
        id="editor"
        cols="30"
        rows="10"
      ></textarea>
      <div id="preview">{preview}</div>
    </>
  );
}

export default App;
