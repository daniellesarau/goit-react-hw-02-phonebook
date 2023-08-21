import { nanoid } from 'nanoid';
import React from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ value, onChange }) => {
  const filterID = nanoid();
  return (
    <div className={css.container}>
      <label className={css.label} htmlFor={filterID}>
        Find contact by name
        <input
          className={css.input}
          type="text"
          value={value}
          name="filter"
          onChange={onChange}
          id={filterID}
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
