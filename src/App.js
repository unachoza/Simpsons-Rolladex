import React, { Component } from 'react';
import CardList from './Components/CardList/CardList.component';
import Search from './Components/Search/Search.component';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      simpsons: [],
      searchInput: '',
    };
  }
  async componentDidMount() {
    try {
      const response = await fetch('https://simpsons-quotes-api.herokuapp.com/quotes?count=10');
      const data = await response.json();
      this.setState({ simpsons: data });
    } catch (error) {
      console.log('there was an error', error);
    }
  }
  onSearchChange = (event) => {
    this.setState({ search: event.target.value });
  };
  render() {
    const { simpsons, searchInput } = this.state;
    return (
      <div className="App">
        <header className="main">
          Simpsons Rolladex
          <Search onSearchChange={this.onSearchChange} />
          <CardList simpsons={simpsons} />
        </header>
      </div>
    );
  }
}

export default App;
