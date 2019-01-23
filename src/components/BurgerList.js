import React, { Component } from "react";
import BurgerItem from "./BurgerItem";

const BurgerList = props => {
  let burgers = props.burgers.map((burger, i) => (
    <BurgerItem
      key={i}
      burger={burger}
      showHandleClick={props.showHandleClick}
    />
  ));

  return <div className="BurgerList">{burgers}</div>;
};

export default BurgerList;
