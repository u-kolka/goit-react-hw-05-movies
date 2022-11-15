import PropTypes from 'prop-types';
import { posterParam } from '../../config'
import { Gallery } from "../MoviesList/MoviesList.styled";
import { CardBox, TextBox } from "../MoviesDetails//MoviesDetails.styled";

export const CastList = ({movie}) => {
    const { postersUrl, altProfileUrl, postersSize } = posterParam;
    return (
    <Gallery>
        {movie && movie.cast.map(({ id, name, profile_path, character }) => {
        const src = (profile_path === null) ? altProfileUrl : (`${postersUrl+postersSize+profile_path}`);
            return (
                <li key={id}>
                    <CardBox>
                        <img src={src} alt={name} width='100' />
                        <TextBox>
                            <h3>{name}</h3>
                            {character && <p>Character: {character}</p>}
                        </TextBox>
                    </CardBox>
                </li>   
            )
      })} 
    </Gallery>
    )
}

CastList.propTypes = {
    movie: PropTypes.object.isRequired,
};