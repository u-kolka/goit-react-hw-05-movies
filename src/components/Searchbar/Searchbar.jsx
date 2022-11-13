import { useState } from "react";
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
// import css from "./Searchbar.module.css";

export default function Searchbar ({onSearch}) {
    const [query, setQuery] = useState('');

    const handleChange = event => {
        setQuery(event.currentTarget.value.toLowerCase());
    };

    const handleSubmit = event => {
        event.preventDefault();

        if (query.trim() === '') {
            return toast.info('🦄 Please enter a word to search.');
        }
        onSearch(query);
    };

    return (
        <header className={css.Searchbar}>
            <form className="SearchForm" onSubmit={handleSubmit}>
                <input
                    className="SearchForm-input"
                    name="search"
                    value={query}
                    onChange={handleChange}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
                <button type="submit" className="SearchForm-button">Search
                    <span className="SearchForm-button-label"></span>
                </button>
            </form>
        </header>
    );
};

Searchbar.propTypes = {
    onSearch: PropTypes.func.isRequired,
};