import React, { Component } from 'react';
import Card from './Components/Card/Card.component';
import CardList from './Components/CardList/CardList.component';
import Search from './Components/Search/Search.component';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {' '}
          Simpsons Rolladex
          <Search />
          <CardList />
        </header>
      </div>
    );
  }
}

export default App;
