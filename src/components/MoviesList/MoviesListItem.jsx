import { posterParam } from '../../config'
import { GalleryItem } from "./MoviesList.styled";

export const MoviesListItem = ({poster, title }) => {
    const { postersUrl, altPosterUrl, postersSize } = posterParam;
    const src = (poster === null) ? altPosterUrl : (`${postersUrl + postersSize + poster}`);
    const name = (title.length > 50) ? `${title.slice(0, 50) + '...'}` : title;

    return (
        <GalleryItem>
            <img src={src} alt={title} width='130px'/>
            <h2>{name}</h2>
        </GalleryItem>
    )
};