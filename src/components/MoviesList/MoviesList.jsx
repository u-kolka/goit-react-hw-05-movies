import PropTypes from 'prop-types';
import { useLocation } from "react-router-dom";
import { MoviesListItem } from "components/MoviesList/MoviesListItem"
import { Gallery, Link } from "./MoviesList.styled";

export const MoviesList = ({ movies }) => {
    const location = useLocation();
return (
    <Gallery id='gallery'>
    {movies && movies.map(({ id, poster_path, release_date, title }) => {
        return (
        <Link to={`/movies/${id}`} key={id} state={{ from: location}}>
            <MoviesListItem poster={poster_path} date={release_date} title={title} />
        </Link>)
    })}
    </Gallery>)
}

MoviesList.propTypes = {
    movies: PropTypes.array.isRequired,
};