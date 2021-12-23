import React from "react";
import PropTypes from "prop-types";
import styles from "./Filter.module.css";

const Filter = ({ value, onChange }) => (
  <label>
    Find contacts by name
    <input
      className={styles.Filter}
      type="text"
      value={value}
      onChange={onChange}
    />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Filter;