import React, { Component } from 'react';
import Card from '../Card/Card.component';
import FetchSimpsons from '../../api/Fetch';

class CardList extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [{ name: 'her' }, { name: 'him' }, { name: 'them' }],
    };
  }
  componentDidMount() {
    this.setState({ data: FetchSimpsons() });
  }

  render() {
    return (
      <div>
        CardList Container
        {this.state.monsters.map((monsters) => {
          return (
            <div>
              <div>{monsters.name}</div>
            </div>
          );
        })}
        {/* <Card /> */}
      </div>
    );
  }
}

export default CardList;
