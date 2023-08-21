import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
import PropTypes from 'prop-types';

export const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handelChange = event => {
    const { name, value } = event.target;
    if ('name' === name) {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handelSubmit = event => {
    event.preventDefault();
    onSubmit(name, number);
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const inputNameId = nanoid();
  const inputTelId = nanoid();

  return (
    <form className={css.form} onSubmit={handelSubmit}>
      <label className={css.label_name} htmlFor={inputNameId}>
        Name
        <input
          className={css.input}
          id={inputNameId}
          onChange={handelChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-zА-Z]+(([' -][a-zA-Zа-zА-Z ])?[a-zA-Zа-zА-Z]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Enter name"
          value={name}
        />
      </label>
      <label className={css.label_number} htmlFor={inputTelId}>
        Number
        <input
          className={css.input}
          id={inputTelId}
          onChange={handelChange}
          value={number}
          type="tel"
          name="number"
          placeholder="Enter phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={css.button} type="submit">
        Add contact
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};
