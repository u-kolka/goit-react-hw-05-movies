import { MoviesListItem } from "components/MoviesDetails/MoviesListItem"
import { Link, useLocation } from "react-router-dom";

export const MoviesList = ({ movies }) => {
    const location = useLocation();
return (
    <ul>
    {movies && movies.map(({ id, poster_path, release_date, title }) => {
        return (
        <Link path='movies' key={id} to={`/movies/${id}`} state={{ from: location}}>
            <MoviesListItem poster={poster_path} date={release_date} title={title} />
        </Link>)
    })}
    </ul>)
}
