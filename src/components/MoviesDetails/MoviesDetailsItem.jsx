
import { genersForFilmCard } from "components/Genres";

export const MoviesDetailsItem = ({ genres, overview, rating, poster, date, title }) => {
    const altPosterUrl = 'https://pbs.twimg.com/media/FJt-fidXIAEH-Xc.jpg';
    const posterParam = {
        postersUrl: 'https://image.tmdb.org/t/p/',
        postersSize: 'w780',
    }

    const { postersUrl, postersSize } = posterParam;
    const src = (poster === null) ? altPosterUrl : (`${postersUrl+postersSize+poster}`);
    return (
        <li>
            <img src={src} alt={title} width='250px' height='375px'/>
            <div>
                <h2>{title} ({date.slice(0, 4)})</h2>
                <p>Rating: {rating.toFixed(1)}</p>
                <h3>Overview</h3>
                <p>{overview}</p>
                <h3>Genres</h3>
                <p>{genersForFilmCard(genres)}</p>
            </div>
        </li>
    )
};

    // ImageGalleryItem.propTypes = {
    //     image: PropTypes.string.isRequired,
    //     modalImage: PropTypes.string.isRequired,
    //     tags: PropTypes.string.isRequired,
    // }