import React, { Component } from "react";
import CheckboxItem from "../CheckboxItem/CheckboxItem";
import classes from "./GoodsItem.module.css";

class GoodsItem extends Component {
  renderSigns = number => {
    const signs = [];
    for (let i = 1; i <= number; i++) {
      signs.push(<i key={number + i} className="fas fa-ruble-sign" />);
    }
    return signs;
  };

  render() {
    const {
      id,
      name,
      rating,
      trend,
      priceSegment,
      reviews,
      isChecked
    } = this.props;

    const clsReviews = [];
    if (!!reviews) {
      clsReviews.push("far fa-comment");
    }

    return (
      <tr className={classes.GoodsItem}>
        <td className={classes.id}>{id}</td>
        <td className={classes.name}>{name}</td>
        <td className={classes.rating}>{rating}</td>
        <td className={classes.trend}>{trend}</td>
        <td className={classes.priceSegment}>
          <span>{this.renderSigns(priceSegment)}</span>
        </td>
        <td className={classes.reviews}>
          <i className={clsReviews.join("")} />
          {reviews}
        </td>
        <td>
          <CheckboxItem
            isChecked={isChecked}
            toggleCheckbox={e => this.props.toggleCheckbox(e)}
          />
        </td>
      </tr>
    );
  }
}

export default GoodsItem;
