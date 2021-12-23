import React, { useState, useEffect  } from "react";
import { nanoid } from "nanoid";
import ContactList from "./ContactList";
import Filter from "./Filter";
import ContactForm from "./ContactForm";
import styles from "./App.module.css";

function App() {
  // const [contacts, setContacts]= useState([
  //   { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  //   { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  //   { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  //   { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  // ]);
  const [contacts, setContacts] = useState(
    JSON.parse(window.localStorage.getItem("contacts")) ?? []
  );
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    const normalizedName = name.toLowerCase();
    const searchExists = contacts
      .map((contact) => contact.name.toLowerCase())
      .includes(normalizedName);

    if (searchExists) {
      alert(`${normalizedName} is already in contacts`);
    } else {
      const contact = {
        name,
        number,
        id: nanoid(),
      };
      setContacts((prevContacts) => [contact, ...prevContacts]);
    }
  };

  const setFilterChange = (e) => {
    setFilter(e.currentTarget.value);
  };

  const getContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = (contactId) => {
    setContacts(contacts.filter((contact) => contact.id !== contactId));
  };

  const displayedContacts = getContacts();

  return (
    <div className={styles.app}>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={setFilterChange} />
      <ContactList contacts={displayedContacts} onDelete={deleteContact} />
    </div>
  );
}

export default App;