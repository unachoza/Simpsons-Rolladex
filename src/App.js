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
  componentDidMount() {
    fetch('https://simpsons-quotes-api.herokuapp.com/quotes?count=10')
      .then((response) => response.json())
      .then((response) => {
        this.setState({ simpsons: response });
      });
  }
  onSearchChange = (event) => {
    this.setState({ search: event.target.value });
  };
  render() {
    const { simpsons, searchInput } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          Simpsons Rolladex
          <Search searchInput={searchInput} />
          <CardList simpsons={simpsons} />
        </header>
      </div>
    );
  }
}

export default App;
