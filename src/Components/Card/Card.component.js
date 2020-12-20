import React from 'react';
import './Card.styles.css';

const Card = ({ image, id, character }) => {
  return (
    <div key={id} className="card">
      <img src={image} alt="simpsons character" className="card-img" />
      <br />
      {character}
    </div>
  );
};

export default Card;
