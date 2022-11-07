import { NavLink } from "react-router-dom";

export const MoviesListItem = ({key, poster, title, movieId }) => {
    const altPosterUrl = 'https://pbs.twimg.com/media/FJt-fidXIAEH-Xc.jpg';
    const posterParam = {
        postersUrl: 'https://image.tmdb.org/t/p/',
        postersSize: 'w780',
    }
    // const { movieId } = useParams();
    const { postersUrl, postersSize } = posterParam;
    const src = (poster === null) ? altPosterUrl : (`${postersUrl+postersSize+poster}`);
    return (
        <li>
            <NavLink key={key} to={`${movieId}`}>
            <img src={src} alt={title} width='100px' height='150px'/>
            <h2>{title}</h2>
            </NavLink>  
        </li>
    )
};