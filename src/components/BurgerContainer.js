import React, { Component } from "react";
import BurgerList from "./BurgerList";
import BurgerFilter from "./BurgerFilter";

export default class BurgerContainer extends Component {
  render() {
    return (
      <div className="BurgerContainer">
        <BurgerFilter filterHandleClick={this.props.filterHandleClick} />
        <BurgerList
          burgers={this.props.burgers}
          showHandleClick={this.props.showHandleClick}
        />
      </div>
    );
  }
}
