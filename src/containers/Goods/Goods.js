import React, { Component } from "react";
import GoodsItem from "./GoodsItem/GoodsItem";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { changeCheckbox } from "../../store/actions/goods";
import TableHeader from "../../components/TableHeader/TableHeader";
import { getDec } from "../../utils/utils";
import classes from "./Goods.module.css";

class Goods extends Component {
  toggleCheckbox = (e, index) => {
    const goods = [...this.props.goods];
    goods[index].isChecked = !goods[index].isChecked;
    this.props.changeCheckbox(goods);
  };

  render() {
    let quantity = 0;

    const goods = this.props.goods.map((item, index) => {
      if (item.isChecked) {
        quantity += 1;
      }

      return (
        <GoodsItem
          key={index}
          {...item}
          toggleCheckbox={e => this.toggleCheckbox(e, index)}
        />
      );
    });

    return (
      <React.Fragment>
        <div className={classes.Goods}>
          <h1>Список товаров</h1>
          <table>
            <tbody>
              <TableHeader />
              {goods}
            </tbody>
          </table>
        </div>
        {quantity === 0 ? (
          <div className={classes.info}>
            <p>Пожалуйста, отметьте галочками несколько товаров</p>
          </div>
        ) : (
          <div className={classes.info_selected}>
            <p>
              Вы выбрали <span>{quantity}</span>
              {getDec(quantity, "товар", "товара", "товаров")}
              {quantity >= 1 ? (
                <NavLink to="/shopping_cart" className={classes.cart_link}>
                  Перейти в корзину
                </NavLink>
              ) : null}
            </p>
          </div>
        )}
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    goods: state.goods.goods
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeCheckbox: goods => {
      dispatch(changeCheckbox(goods));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Goods);
