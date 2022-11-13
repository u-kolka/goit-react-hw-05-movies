import { posterParam } from '../../config'
import { CardBox, TextBox } from "../MoviesDetails//MoviesDetails.styled";
import { Item } from './Reviews.styled';

export const ReviewsList = ({ movie }) => {
    const { postersUrl, altProfileUrl, postersSize } = posterParam;

    return (
        <ul>
        {movie.length > 0 && movie.map(({ id, author, author_details: { avatar_path }, content }) => {
            const src = (avatar_path === null) ? altProfileUrl : avatar_path.includes('/https') ?
                avatar_path.replace('/', '') : (`${postersUrl + postersSize + avatar_path}`);
              
            return (
                <Item key={id}>
                    <CardBox>
                        <img src={src} alt={author} width='100' />
                        <TextBox>
                            <h3>{author}</h3>
                            <p>{content}</p>
                        </TextBox>
                    </CardBox>
                </Item>)
        })}
        </ul>
    )
}