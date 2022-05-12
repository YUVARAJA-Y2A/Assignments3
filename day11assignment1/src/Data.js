import React, { useState } from "react";
import "./data.css";
import image1 from "./images/item-1.jpeg";
import image2 from "./images/item-2.jpeg";
import image3 from "./images/item-3.jpeg";
import image4 from "./images/item-4.jpeg";
import image5 from "./images/item-5.jpeg";
import image6 from "./images/item-6.jpeg";
import image7 from "./images/item-7.jpeg";
import image8 from "./images/item-8.jpeg";
import image9 from "./images/item-9.jpeg";

function Data() {
  const [data] = useState([
    {
      id: 1,
      name: "Buttermilk Pancakes",
      description:
        "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
      image: image1,
      category: "Breakfast",
      price: "$15.99",
    },
    {
      id: 2,
      name: "Dinner Double",
      description:
        "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats",
      image: image2,
      category: "Lunch",
      price: "$13.99",
    },
    {
      id: 3,
      name: "Godzilla Milkshake",
      description:
        "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.",
      image: image3,
      category: "Shakes",
      price: "$6.99",
    },
    {
      id: 4,
      name: "Country Delight",
      description:
        "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,",
      image: image4,
      category: "Breakfast",
      price: "$20.99",
    },
    {
      id: 5,
      name: "Egg Attack",
      description:
        "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up",
      image: image5,
      category: "Lunch",
      price: "$22.99",
    },
    {
      id: 6,
      name: "Oreo Dream",
      description:
        "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday",
      image: image6,
      category: "Shakes",
      price: "$18.99",
    },
    {
      id: 7,
      name: "Bacon Overflow",
      description:
        "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird",
      image: image7,
      category: "Breakfast",
      price: "$8.99",
    },
    {
      id: 8,
      name: "American Classic",
      description:
        "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut",
      image: image8,
      category: "Lunch",
      price: "$12.99",
    },
    {
      id: 9,
      name: "Quarantine Buddy",
      description:
        "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
      image: image9,
      category: "Shakes",
      price: "$16.99",
    },
  ]);
  const handleData = (dat) => {
    if (dat === "All") {
      setRenderData(data);
      return;
    }
    const filteredData = data.filter((datum) => datum.category === dat);
    setRenderData(filteredData);
  };

  const [dataRender, setRenderData] = useState(data);
  const category = data.map((datum) => datum.category);
  const uniqueCategory = [...new Set(category)];
  console.log(uniqueCategory);
  uniqueCategory.unshift("All");

  return (
    <div class="main-home">
      <h2 class="title d-flex justify-content-center">Our Menu</h2>
      <div class="under-line justify-content-center"></div>
      <div class="d-flex m-3 justify-content-center">
        {uniqueCategory.map((dat, i) => (
          <div class="d-flex flex-row">
            <button
              key={i}
              class="px-2 m-2 tabs"
              onClick={() => handleData(dat)}
            >
              {dat}
            </button>
          </div>
        ))}
      </div>
      <div class="row pt-5">
        {dataRender.map((datum) => (
          <div key={datum.id} class="d-flex ms-5 col-5">
            <div class="d-flex">
              <img
                class="imgs rounded mx-auto d-block m-3"
                src={datum.image}
              ></img>
              <div class="pt-3 px-3">
                <div class="d-flex justify-content-between">
                  <div class="product-name">{datum.name}</div>
                  <div class="product-price">{datum.price}</div>
                </div>
                <div class="underline-full"></div>
                <div class="product-description">{datum.description}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Data;
