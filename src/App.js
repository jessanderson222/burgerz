import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BurgerContainer from "./components/BurgerContainer";
import BurgerDisplay from "./components/BurgerDisplay";
// import { resolveAny } from "dns";

class App extends Component {
  state = {
    burgers: [],
    filteredBurgers: [],
    burger: {}
  };

  showHandleClick = (e, burger) => {
    e.preventDefault();

    this.burgerDataToDisplay(burger);
  };

  filterHandleClick = (e, category) => {
    e.preventDefault();
    this.filterByCategory(category);
  };

  filterByCategory = myCategory => {
    console.log(myCategory);
    let newFilteredBurgers = [...this.state.burgers];

    let categoryBurgers = newFilteredBurgers.filter(
      burger => burger.category === myCategory
    );

    this.setState({
      filteredBurgers: categoryBurgers
    });
  };

  burgerDataToDisplay = burger => {
    this.setState({
      burger: burger
    });
  };

  componentDidMount() {
    fetch("http://localhost:3001/burgers")
      .then(res => res.json())
      .then(data =>
        this.setState({
          burgers: data,
          filteredBurgers: data
        })
      );
  }

  render() {
    console.log(this.state);
    return (
      <div id="App">
        <BurgerContainer
          burgers={this.state.filteredBurgers}
          showHandleClick={this.showHandleClick}
          filterHandleClick={this.filterHandleClick}
        />
        <BurgerDisplay burger={this.state.burger} />
      </div>
    );
  }
}

export default App;
