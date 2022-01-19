import React, { Component } from "react";
import CardList from "./Components/CardList/CardList.component";
import Search from "./Components/Search/Search.component";
import Loading from "./Components/Loading/Loading.component";
import Button from "./Components/Button/Button.component";
import "./App.scss";

class App extends Component {
  constructor() {
    super();
    this.state = {
      simpsons: [],
      searchInput: "",
    };
  }
  fetchData = async () => {
    try {
      const response = await fetch("https://simpsons-quotes-api.herokuapp.com/quotes?count=9");
      const data = await response.json();
      this.setState({ simpsons: data });
    } catch (error) {
      console.log("there was an error", error);
    }
  };
  componentDidMount() {
    this.fetchData();
  }
  onSearchChange = (event) => {
    this.setState({ searchInput: event.target.value });
  };

  render() {
    const { simpsons, searchInput } = this.state;
    const filteredCharacters = simpsons.filter((simpson) => {
      return simpson.character.toLowerCase().includes(searchInput.toLowerCase());
    });
    console.log(filteredCharacters);
    return (
      <div className="App">
        <header className="main">
          <img
            src="https://i.pinimg.com/originals/73/1a/c7/731ac71d0aa7302e232087e7a998b04e.jpg"
            className="title-img"
            alt="simpsons title"
          />
          <div className="button-container">
            <div className="directions">Click card for character quote</div>
            <Button text={"Load More"} onClick={() => this.fetchData()} />
          </div>
          <Search onSearchChange={this.onSearchChange} />
          {filteredCharacters.length < 1 ? <Loading /> : <CardList simpsons={filteredCharacters} />}
        </header>
      </div>
    );
  }
}

export default App;
