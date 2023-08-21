import React, { useState } from 'react';
import css from './app.module.css';
import { nanoid } from 'nanoid';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

export const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, SetFiler] = useState('');

  const onSubmitHandler = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const includeName = contacts.find(user => user.name === contact.name);
    if (includeName) {
      alert(`${contact.name} is already in contacts`);
    } else {
      setContacts(prevContacts => [contact, ...prevContacts]);
    }
  };

  const handleChange = event => {
    const { value } = event.target;
    SetFiler(value);
  };

  const handleDelete = id => {
    const newContactList = contacts.filter(contact => contact.id !== id);
    setContacts(newContactList);
  };
  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onSubmit={onSubmitHandler} />

      <h2 className={css.title}>Contacts</h2>
      <Filter value={filter} onChange={handleChange} />
      <ContactList contacts={filterContacts} onDelete={handleDelete} />
    </div>
  );
};
