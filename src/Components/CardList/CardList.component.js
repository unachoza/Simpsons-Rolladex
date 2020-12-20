import React from 'react';
import Card from '../Card/Card.component';
import './CardList.styles.css';
const CardList = ({ simpsons }) => {
  return (
    <div className="card-list">
      {simpsons.length > 0 ? (
        simpsons.map((simp) => <Card image={simp.image} id={simp.id} character={simp.character} />)
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
};

export default CardList;
