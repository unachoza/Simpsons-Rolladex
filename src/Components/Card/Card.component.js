import React from "react";
import "./Card.styles.css";

const Card = ({ image, id, character, quote }) => {
  return (
    <label>
      <input type="checkbox" />
      <div className="flip-card">
        <div key={id} className="card front">
          <img src={image} alt="simpsons character" className="card-img" />
          <br />
          <div className="card-text"> {character}</div>
        </div>
        <div className="card back">
          <div className="card-quote"> "{quote}"</div>
        </div>
      </div>
    </label>
  );
};

export default Card;
