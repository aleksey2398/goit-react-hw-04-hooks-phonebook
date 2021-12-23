import React from "react";
import PropTypes from "prop-types";
import Contact from "../Contact";
import styles from "./ContactList.module.css";

const ContactList = ({ contacts, onDelete }) => {
  const list = contacts.map(({ id, name, number }) => (
    <Contact
      key={id}
      name={name}
      number={number}
      onDelete={() => onDelete(id)}
    />
  ));
  //console.log(list);
  return contacts.length > 0 && <ul className={styles.contactsList}>{list}</ul>;
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;