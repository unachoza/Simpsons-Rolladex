import React, { Component } from 'react';
import Card from '../Card/Card.component';
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
    return (
      <ul>
        {simpsons.length > 0 ? (
          this.state.simpsons.map((simp) => <li key={simp.id}>{simp.character}</li>)
        ) : (
          <div>loading...</div>
        )}
      </ul>
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
//         {/* <Card /> */}
//       </div>
//     );
//   }
// }

export default CardList;
