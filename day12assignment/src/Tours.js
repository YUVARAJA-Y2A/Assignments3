import React, { useState } from "react";
import "./tours.css";

function Tours(props) {
  const [Readmore, setReadmore] = useState(true);
  const [DeleteContent, SetDeleteContent] = useState(false);
  const [ShowButton, setShowButton] = useState(false);
  const [Count, setCount] = useState(0);
  const handleReadmore = () => {
    setReadmore(!Readmore);
  };

  const handleDelete = () => {
    SetDeleteContent(!DeleteContent);
  };
  const handleCount = () => {
    setCount(Count + 1);
  };
  console.log("inc count", Count);
  if (props.length === Count) {
    setShowButton(true);
  }

  return (
    <div class="main-div mb-4">
      {ShowButton && (
        <div>
          <button>Refresh</button>
        </div>
      )}
      {!DeleteContent && (
        <div>
          <div class="d-flex justify-content-center">
            <img src={props.image}></img>
          </div>
          <div class="d-flex justify-content-center flex-column img-footer p-4">
            <div class="d-flex justify-content-between mb-3">
              <h4 class="h4-name">{props.name}</h4>
              <h4 class="h4-price p-1">${props.price}</h4>
            </div>
            <div class="div-info">
              {Readmore ? props.info.slice(0, 114) : props.info}
              <a class="readmoretxt" href="#" onClick={handleReadmore}>
                {Readmore ? "Read More" : "Read Less"}
              </a>
            </div>
            <div class="d-flex justify-content-center">
              <button
                class="mt-3 ps-5 pe-5 btn_not_interested"
                onClick={() => {
                  handleCount();
                  handleDelete();
                }}
              >
                Not Interested
              </button>
            </div>
          </div>
        </div>
      )}
      {console.log(props.length)}
    </div>
  );
}

export default Tours;
