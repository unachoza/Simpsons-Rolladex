import React, { Component } from 'react';
import Card from '../Card/Card.component';
import FetchSimpsons from '../../api/Fetch';

class CardList extends Component {
  componentDidMount() {
    FetchSimpsons();
  }

  render() {
    return (
      <div>
        CardList Container
        <Card />
      </div>
    );
  }
}

export default CardList;
