import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';
export const ContactList = ({ contacts, onDelete }) => {
  return (
    <div className={css.container}>
      <ul className={css.contacts_list}>
        {contacts.map(({ name, id, number }) => {
          return (
            <li className={css.contact_item} key={id}>
              <p className={css.value}>
                {name}: {number}
              </p>
              <button
                className={css.button_delete}
                type="button"
                onClick={() => onDelete(id)}
              >
                {' '}
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func,
};
