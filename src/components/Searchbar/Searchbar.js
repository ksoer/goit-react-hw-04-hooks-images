import React, { Component } from 'react';
import PropTypes from 'prop-types';
import st from '../styles.module.css';

export class Searchbar extends Component {
  state = {
    inputSearch: '',
  };

  handleInputChange = e => {
    this.setState({ inputSearch: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { onSubmit } = this.props;
    onSubmit(this.state.inputSearch);
    this.reset();
  };

  reset = () => {
    this.setState({ inputSearch: '' });
  };

  render() {
    return (
      <header className={st.Searchbar}>
        <form className={st.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={st.SearchForm_button}>
            <span className={st.SearchForm_button_label}>Search</span>
          </button>

          <input
            className={st.SearchForm_input}
            type="text"
            value={this.state.inputSearch}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleInputChange}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = { onSubmit: PropTypes.func };

export default Searchbar;