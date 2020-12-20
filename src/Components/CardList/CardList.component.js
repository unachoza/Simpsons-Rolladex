import React from 'react';
import Card from '../Card/Card.component';
import './CardList.styles.css';
import Loading from '../Loading/Loading.component';

const CardList = ({ simpsons }) => {
  return (
    <div className="card-list">
      {simpsons.length > 0 ? (
        simpsons.map((simp) => <Card image={simp.image} id={simp.id} character={simp.character} />)
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default CardList;
