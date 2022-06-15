import React from "react";
import Card from "./Card";

import image1 from "../assets/github.png";
import image2 from "../assets/clima.png";

//le paso los datos de cada card 
const cards = [
  {
    id: 1,
    title: "GitHub Repository",
    image: image1,
    text: "Repositorio de GitHub - codigo del proyecto",
    url: "https://github.com/JuliSdru/ProgAvII",
  },
  {
    id: 2,
    title: "Documentación API",
    image: image2,
    text: "Pagina web con documentacion de la API utlizada",
    url: "https://openweathermap.org/api",
  }
];

function Cards() {
  return (
    <div className="cont">
      <div className="row">
        {/* recorro mi cards  */}
        {cards.map(({ title, image, url, text, id }) => (
          <div className="col-4 " key={id}>
            <Card imageSource={image} title={title} text={text} url={url} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;