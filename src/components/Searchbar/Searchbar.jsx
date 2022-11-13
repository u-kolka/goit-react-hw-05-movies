import { useState } from "react";
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { SearchForm, SearchFormInput, SearchFormButton } from "./Searchbar.styled";

export default function Searchbar ({onSubmit}) {
    const [query, setQuery] = useState('');

    const handleChange = event => {
        setQuery(event.currentTarget.value.toLowerCase());
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

// Searchbar.propTypes = {
//     onSearch: PropTypes.func.isRequired,
// };