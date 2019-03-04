import React, { Component } from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Goods from "./containers/Goods/Goods";
import Shopping_cart from "./containers/Shopping_cart/Shopping_cart";

class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route path="/goods" exact component={Goods} />
        <Route path="/shopping_cart" component={Shopping_cart} />
        <Redirect to="/goods" />
      </Switch>
    );
    return <div className="App">{routes}</div>;
  }
}

export default App;
