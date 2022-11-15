import PropTypes from 'prop-types';
import { genersForFilmCard } from "components/Genres";
import { posterParam } from '../../config'
import { CardBox, TextBox } from "./MoviesDetails.styled";

export function MoviesDetailsItem({ genres, overview, rating, poster, date, title }) {

    const { postersUrl, altPosterUrl, postersSize } = posterParam;
    const src = (poster === null) ? altPosterUrl : (`${postersUrl+postersSize+poster}`);
    return (
        <CardBox>
            <img src={src} alt={title} width='250px' height='375px'/>
            <TextBox>
                <h2>{title} {date.slice(0, 4)}</h2>
                <p>Rating: {rating.toFixed(1)}</p>
                <h3>Overview</h3>
                <p>{overview}</p>
                <h3>Genres</h3>
                <p>{genersForFilmCard(genres)}</p>
            </TextBox>
        </CardBox>
    )
};

MoviesDetailsItem.propTypes = {
    genres: PropTypes.array.isRequired,
    overview: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    poster: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};