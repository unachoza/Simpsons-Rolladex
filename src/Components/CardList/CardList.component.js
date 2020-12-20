import React, { Component } from 'react';
import Card from '../Card/Card.component';
import './CardList.styles.css';
import FetchSimpsons from '../../api/Fetch';

class CardList extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [{ name: 'her' }, { name: 'him' }, { name: 'them' }],
      simpsons: [],
    };
  }

  componentDidMount() {
    fetch('https://simpsons-quotes-api.herokuapp.com/quotes?count=10')
      .then((response) => response.json())
      .then((response) => {
        this.setState({ simpsons: response });
      });
  }

  render() {
    const { simpsons } = this.state;
    console.log(simpsons);
    return (
      <div className="card-list">
        {simpsons.length > 0 ? (
          this.state.simpsons.map((simp) => <Card image={simp.image} id={simp.id} character={simp.character} />)
        ) : (
          <div>loading...</div>
        )}
      </div>
    );
  }
}

//   render() {
//     const { data } = this.state;
//     console.log(data, 'hey');
//     return (
//       <div>
//         CardList Container
//         {data
//           ? data.map((data) => {
//               return (
//                 <div>
//                   <div>{data.character}</div>
//                 </div>
//               );
//             })
//           : null}
//       </div>
//     );
//   }
// }

export default CardList;
