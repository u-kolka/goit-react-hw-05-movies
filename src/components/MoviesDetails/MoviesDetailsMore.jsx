import PropTypes from 'prop-types';
import { Link } from "components/MoviesDetails/MoviesDetails.styled";
import { Title } from "components/MoviesDetails/MoviesDetails.styled";

const navItems = [
    { href: 'cast', text: 'Cast' },
    { href: 'reviews', text: 'Reviews' },
];

export const MoviesDetailsMore = ({id}) => {
  return (<>
      <Title>Aadditional information</Title>
    <ul>
      {navItems.map(({ href, text }) =>
        <Link key={href} to={href} state={{ id }}>
          {text} 
        </ Link>)}
    </ul>
  </>
  )
}

MoviesDetailsMore.propTypes = {
    id: PropTypes.string.isRequired,
};