import s from './Form.module.css';
import { useState } from 'react';
import PropTypes from 'prop-types';

function Form({ handleSearchChange }) {
  const [query, setQuery] = useState('');

  const handleSearchInput = e => {
    const { value } = e.currentTarget;

    setQuery(value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!query.trim()) {
      console.log('Empty');
      return;
    }

    handleSearchChange(query);
  };
  return (
    <>
      <form className={s.form} onSubmit={handleSubmit}>
        <input
          className={s.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          onChange={handleSearchInput}
        />
        <button className={s.btn} type="submit">
          <span>Search</span>
        </button>
      </form>
    </>
  );
}
export default Form;
Form.propTypes = {
  handleSearchChange: PropTypes.func.isRequired,
};
