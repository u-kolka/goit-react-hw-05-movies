import { useState } from "react";
import PropTypes from 'prop-types';
import { SearchForm, SearchFormInput, SearchFormButton } from "./Searchbar.styled";

export default function Searchbar ({onSubmit, value}) {
    const [query, setQuery] = useState(value ?? '');

    const handleChange = event => {
        setQuery(event.currentTarget.value); 
    };

    return (
            <SearchForm onSubmit={onSubmit}>
                <SearchFormInput
                    name="query"
                    value={query}
                    onChange={handleChange}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Enter to search movie"
                />
                <SearchFormButton type="submit">Search
                </SearchFormButton>
            </SearchForm>
    );
};

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    value: PropTypes.string,
};