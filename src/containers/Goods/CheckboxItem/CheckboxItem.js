import React from "react";
import classes from "./CheckboxItem.module.css";

const CheckboxItem = props => {
  return (
    <label className={classes.CheckboxItem}>
      <input
        className={classes.visually_hidden}
        type="checkbox"
        checked={props.isChecked}
        onChange={e => props.toggleCheckbox(e)}
      />
      <i className="fas fa-check" />
      <span className={classes.label} />
    </label>
  );
};

export default CheckboxItem;
