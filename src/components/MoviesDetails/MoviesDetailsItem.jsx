// import { useParams } from "react-router-dom";
import { genersForFilmCard } from "components/Genres";
import { posterParam } from '../../config'

export function MoviesDetailsItem({ genres, overview, rating, poster, date, title }) {

    const { postersUrl, altPosterUrl, postersSize } = posterParam;
    const src = (poster === null) ? altPosterUrl : (`${postersUrl+postersSize+poster}`);
    return (
        <div>
            <img src={src} alt={title} width='250px' height='375px'/>
            <div>
                <h2>{title} {date.slice(0, 4)}</h2>
                <p>Rating: {rating.toFixed(1)}</p>
                <h3>Overview</h3>
                <p>{overview}</p>
                <h3>Genres</h3>
                <p>{genersForFilmCard(genres)}</p>
            </div>
        </div>
    )
};

    // ImageGalleryItem.propTypes = {
    //     image: PropTypes.string.isRequired,
    //     modalImage: PropTypes.string.isRequired,
    //     tags: PropTypes.string.isRequired,
    // }