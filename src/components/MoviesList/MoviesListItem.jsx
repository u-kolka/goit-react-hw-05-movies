import PropTypes from 'prop-types';
import { posterParam } from '../../config'
import { GalleryItem, Box } from "./MoviesList.styled";

export const MoviesListItem = ({poster, title }) => {
    const { postersUrl, altPosterUrl, postersSize } = posterParam;
    const src = (poster === null) ? altPosterUrl : (`${postersUrl + postersSize + poster}`);
    const name = (title.length > 50) ? `${title.slice(0, 50) + '...'}` : title;

    return (
        <GalleryItem>
            <img src={src} alt={title} width='130px' />
            <Box>
                <h2>{name}</h2>
            </Box>
        </GalleryItem>
    )
};

MoviesListItem.propTypes = {
    poster: PropTypes.string,
    title: PropTypes.string.isRequired,
};