import { posterParam } from '../../config'
import { GalleryItem } from "./MoviesList.styled";

export const MoviesListItem = ({poster, title }) => {
    const { postersUrl, altPosterUrl, postersSize } = posterParam;
    const src = (poster === null) ? altPosterUrl : (`${postersUrl+postersSize+poster}`);
    return (
        <GalleryItem>
            <img src={src} alt={title} width='100px'/>
            <h2>{title}</h2>
        </GalleryItem>
    )
};