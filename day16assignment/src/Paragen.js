import React, { useState } from "react";
import text from "./text";
import "./paragen.css";

function Paragen() {
  const [index, setIndex] = useState();
  const [input, setInput] = useState();
  const [text, setText] = useState([]);
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleParagraph = () => {
    setIndex(input);
    setText(text.slice(0, input));
  };
  return (
    <div>
      <div class="pt-5 d-flex justify-content-center title">
        <h2>TIRED OF BORING LOREM IPSUM?</h2>
      </div>
      <div class="pt-3 d-flex justify-content-center">
        <p class="p-para">Paragraphs : </p>
        <input
          value={input}
          class="input-number"
          type="number"
          onChange={handleChange}
        ></input>
        <button onClick={handleParagraph} class="gen-button">
          GENERATE
        </button>
      </div>

      <div class="text-content pt-3">
        {text.map((item, index) => {
          <p key={index}>{item}</p>;
        })}
      </div>
    </div>
  );
}

export default Paragen;
