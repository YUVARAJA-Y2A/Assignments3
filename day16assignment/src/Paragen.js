import React, { useState } from "react";
import text from "./text";
import "./paragen.css";

function Paragen() {
  const [input, setInput] = useState();
  const [data] = useState(text);
  const [sliceval, setsliceval] = useState(0);
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleParagraph = () => {
    input <= 0 || input === undefined ? setsliceval(0) : setsliceval(input);
    console.log(input);
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
        {data.slice(0, sliceval).map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </div>
    </div>
  );
}

export default Paragen;
