import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./ContactForm.module.css";
import InputField from "../InputField/InputField";
import inputAttr from "../InputField/InputAttr";

function ContactForm({ onAdd }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  // const handleChange = (e) => {
  //   const target = e.target.name;
  //   switch (target) {
  //     case "name":
  //       setName((name) => e.target.value);
  //       break;
  //     case "number":
  //       setNumber((number) => e.target.value);
  //       break;
  //     default:
  //       return;
  //   }
  // };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(name, number);
    reset();
  };
  const reset = () => {
    setName("");
    setNumber("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <InputField
        {...inputAttr.name}
        value={name}
        onChange={handleNameChange}
      />
      <InputField
        {...inputAttr.number}
        value={number}
        onChange={handleNumberChange}
      />
      <button type="submit">Add contact</button>
    </form>
  );
}

ContactForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
  name: PropTypes.string,
  number: PropTypes.number,
};

export default ContactForm;