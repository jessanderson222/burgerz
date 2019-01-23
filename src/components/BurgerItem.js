import React, { Component } from "react";

const BurgerItem = props => {
  // console.log(props);
  return (
    <div>
      <div className="BurgerItem">{props.burger.name}</div>
      <div className="BurgerBottomBun">
        <button
          value={props.burger.id}
          onClick={e => props.showHandleClick(e, props.burger)}
        >
          Show
        </button>
        <button onClick={console.log}>Delete</button>
      </div>
    </div>
  );
};

export default BurgerItem;
