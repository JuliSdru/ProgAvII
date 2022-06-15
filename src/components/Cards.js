import React from "react";
import Card from "./Card";

import image1 from "../assets/github.png";
import image2 from "../assets/clima.png";
import image3 from "../assets/github.jpg";


const cards = [
  {
    id: 1,
    title: "GitHub Repository",
    image: image1,
    url: "https://github.com/JuliSdru/ProgAvII",
  },
  {
    id: 2,
    title: "Documentación API",
    image: image2,
    url: "https://openweathermap.org/api",
  }
];

function Cards() {
  return (
    <div className="cont">
      <div className="row">
        {cards.map(({ title, image, url, id }) => (
          <div className="col-4 " key={id}>
            <Card imageSource={image} title={title} url={url} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;