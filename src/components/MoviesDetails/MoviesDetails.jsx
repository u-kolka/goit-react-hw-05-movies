// import PropTypes from 'prop-types';
import { useParams, NavLink, Outlet } from "react-router-dom";
// import { MoviesDetailsItem } from "./MoviesDetailsItem";
import {MoviesListItem} from "./MoviesListItem";

export function MoviesDetails({ movies, trendingStatus }) {
    console.log(movies);
    console.log(trendingStatus);

    // const { id } = useParams();
    return (
        <NavLink>
            {movies && movies.map(({ id, poster_path, release_date, title }) => {
                return <MoviesListItem key={id} poster={poster_path} date={release_date} title={title} movieId={id} />
            })
                // || movies.map(({ id, genre_ids, overview, vote_average, poster_path, release_date, title }) => {
                // return <MoviesDetailsItem key={id} to={id} genres={genre_ids} overview={overview} rating={vote_average} poster={poster_path} date={release_date} title={title}/>
                // })
            }
            <Outlet></Outlet>
        </NavLink>
    );
};

// ImageGallery.propTypes = {
//     images: PropTypes.arrayOf(PropTypes.shape({
//             id: PropTypes.number.isRequired,
//     }))
// }