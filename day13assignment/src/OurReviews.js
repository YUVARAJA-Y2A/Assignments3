import React, { useState } from "react";
import reviews from "./reviews";
import "./ourreview.css";

function OurReviews() {
  const [index, setIndex] = useState(0);
  const handlePrev = () => {
    if (index > 0) {
      if (index < reviews.length) {
        setIndex(index - 1);
      }
    } else {
      setIndex(3);
    }
  };
  const handleNext = () => {
    if (index < reviews.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };
  const handleSurpriseMe = () => {
    let randomValue = Math.floor(Math.random() * reviews.length);
    if (randomValue === index) {
      randomValue = randomValue + 1 > reviews.length - 1 ? 0 : randomValue + 1;
    }
    console.log(randomValue);
    setIndex(randomValue);
  };
  //   console.log(Math.floor(Math.random() * (reviews.length - index)));
  //    var count = Object.keys(myObject).length;
  //    console.log(count);
  return (
    <div class="div-revs">
      <div class="d-flex flex-column justify-content-center">
        <img class="profile-img" src={reviews[index].image}></img>
      </div>
      <div class="d-flex flex-column">
        <div class="div-name pt-3">{reviews[index].name}</div>
        <div class="div-job">{reviews[index].job}</div>
        <div class="div-text pt-2">{reviews[index].text}</div>
        <div class="d-flex justify-content-center">
          <button onClick={handlePrev} class="m-1 bt-prev">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 320 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path>
            </svg>
          </button>
          <button onClick={handleNext} class="m-1 bt-next">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 320 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
            </svg>
          </button>
        </div>
        <div class="d-flex justify-content-center pt-3">
          <button onClick={handleSurpriseMe} class="bt-surpriseme">
            Surprise Me
          </button>
        </div>
      </div>
    </div>
  );
}

export default OurReviews;
