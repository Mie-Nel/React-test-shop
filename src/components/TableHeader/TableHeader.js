import React from "react";
import classes from "./TableHeader.module.css";

const TableHeader = props => {
  return (
    <tr className={classes.TableHeader}>
      <th>#</th>
      <th>Название</th>
      <th>Рейтинг</th>
      <th>Тренд</th>
      <th>Ценовой сегмент</th>
      <th>Отзывы покупателей</th>
      <th>В корзину</th>
    </tr>
  );
};
export default TableHeader;
