import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import people from "./people";
import "./slider.css";
function Slider() {
  const [index] = useState(0);
  return (
    <div>
      <div
        id="carouselExampleInterval"
        class="carousel slide sldrmain"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="3000">
            <div>
              <img src={people[index].image} class="d-block" alt="..."></img>
            </div>
            <div class="footer-bottom">
              <div class="div-name mt-2">{people[index].name}</div>
              <div class="div-title">{people[index].title}</div>
              <div class="div-quote mt-3 w-75">{people[index].quote}</div>
            </div>
            <div class="quotemark pt-3">
              <svg
                stroke="currentColor"
                fill="#ba5d2c"
                stroke-width="0"
                viewBox="0 0 512 512"
                class="icon"
                height="3em"
                width="3em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"></path>
              </svg>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="3000">
            <div>
              <img
                src={people[index + 1].image}
                class="d-block "
                alt="..."
              ></img>
            </div>
            <div class="footer-bottom">
              <div class="div-name mt-2">{people[index + 1].name}</div>
              <div class="div-title">{people[index + 1].title}</div>
              <div class="div-quote mt-3 w-75">{people[index + 1].quote}</div>
            </div>
            <div class="quotemark pt-3">
              <svg
                stroke="currentColor"
                fill="#ba5d2c"
                stroke-width="0"
                viewBox="0 0 512 512"
                class="icon"
                height="3em"
                width="3em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"></path>
              </svg>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="3000">
            <div>
              <img
                src={people[index + 2].image}
                class="d-block"
                alt="..."
              ></img>
            </div>
            <div class="footer-bottom">
              <div class="div-name mt-2">{people[index + 2].name}</div>
              <div class="div-title">{people[index + 2].title}</div>
              <div class="div-quote mt-3 w-75">{people[index + 2].quote}</div>
            </div>
            <div class="quotemark pt-3">
              <svg
                stroke="currentColor"
                fill="#ba5d2c"
                stroke-width="0"
                viewBox="0 0 512 512"
                class="icon"
                height="3em"
                width="3em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"></path>
              </svg>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="3000">
            <div>
              <img
                src={people[index + 3].image}
                class="d-block"
                alt="..."
              ></img>
            </div>
            <div class="footer-bottom">
              <div class="div-name mt-2">{people[index + 3].name}</div>
              <div class="div-title">{people[index + 3].title}</div>
              <div class="div-quote mt-3 w-75">{people[index + 3].quote}</div>
            </div>
            <div class="quotemark pt-3">
              <svg
                stroke="currentColor"
                fill="#ba5d2c"
                stroke-width="0"
                viewBox="0 0 512 512"
                class="icon"
                height="3em"
                width="3em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"></path>
              </svg>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev btnprevs"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <IoIosArrowBack size={32} class="btnprev p-1" />
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <IoIosArrowForward size={32} class="btnnext p-1" />
        </button>
      </div>
    </div>
  );
}

export default Slider;
