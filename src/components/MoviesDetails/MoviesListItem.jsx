import { posterParam } from '../../config'

export const MoviesListItem = ({key, poster, title, movieId }) => {
    const { postersUrl, altPosterUrl, postersSize } = posterParam;
    const src = (poster === null) ? altPosterUrl : (`${postersUrl+postersSize+poster}`);
    return (
        <li>
            <img src={src} alt={title} width='100px' height='150px'/>
            <h2>{title}</h2>
        </li>
    )
};