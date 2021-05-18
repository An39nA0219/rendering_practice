import React, { useState } from "react";
import { ChildArea } from "./ChildArea";
import "./styles.css";

export default function App() {
  console.log("App");
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const onChangeInput = (e) => {
    setText(e.target.value);
  };
  const onClickShow = () => {
    setOpen(!open);
  };
  return (
    <div className="App">
      <input value={text} onChange={onChangeInput} />
      <button onClick={onClickShow}>表示</button>
      <br />
      <br />
      <ChildArea open={open} />
    </div>
  );
}
