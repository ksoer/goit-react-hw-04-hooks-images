import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import st from '../styles.module.css';

function Searchbar({ onHandleSubmit }) {
  const [query, setQuery] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      return toast.info('😱 Please enter a value for search images!');
    }
    onHandleSubmit(query);
    setQuery('');
  };

 
    return (
      <header className={st.Searchbar}>
        <form className={st.SearchForm} onSubmit={onSubmit}>
          <button type="submit" className={st.SearchForm_button}>
            <span className={st.SearchForm_button_label}>Search</span>
          </button>

          <input
            className={st.SearchForm_input}
            type="text"
            value={query}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={({ target }) => setQuery(target.value)}
          />
        </form>
      </header>
    );
  }

Searchbar.propTypes = {
  onHandleSubmit: PropTypes.func.isRequired,
};

export default Searchbar;