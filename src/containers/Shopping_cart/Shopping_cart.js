import React, { Component } from "react";
import { connect } from "react-redux";
import { getDec } from "../../utils/utils";
import classes from "./Shopping_cart.module.css";

class Shopping_cart extends Component {
  renderItems = items => {
    return items.map(item => {
      return item.name;
    });
  };

  render() {
    const items = this.props.goods.filter(item => item.isChecked === true);
    const list = this.renderItems(items);

    return (
      <div className={classes.Shopping_cart}>
        <h2>Ваши товары</h2>
        <p>
          Вы выбрали {items.length}&nbsp;
          {getDec(items.length, "товар", "товара", "товаров")}:&nbsp;
          <strong>{list.join(", ")}.</strong>
        </p>
        <div className={classes.features}>
          <h3>Преимущества покупок у нас</h3>
          <ul>
            <li>Мы классные</li>
            <li>Мы классные и очень-очень крутые</li>
            <li>Даже сложно описать всю нашу крутость :)</li>
          </ul>
          <p>И всё это - для вас!</p>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    goods: state.goods.goods
  };
}

export default connect(
  mapStateToProps,
  null
)(Shopping_cart);
