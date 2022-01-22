import React from 'react';
import Card from '../Card/Card.component';
import './CardList.styles.css';

const CardList = (filteredCharacters) => {
  return (
    <div className="card-list">
       { filteredCharacters.simpsons.map((simp, i) => <Card image={simp.image} key={i} id={simp.id} character={simp.character} quote={simp.quote} />)}
    </div>
  );
};

export default CardList;
