import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { Link, Title } from "components/MoviesDetails/MoviesDetails.styled";
import { BackLink } from '../BackLink/BackLink'

const navItems = [
    { href: 'cast', text: 'Cast' },
    { href: 'reviews', text: 'Reviews' },
];

export const MoviesDetailsMore = ({ id }) => {
    const location = useLocation();
    const backLinkHref = location.state?.from ?? `/`

  return (<>
      <BackLink to={backLinkHref}>Go back</BackLink>
      <Title>Additional information</Title>
    <ul>
      {navItems.map(({ href, text }) =>
        <Link key={href} to={href} state={{ id, from: backLinkHref }}>
          {text} 
        </ Link>)}
    </ul>
  </>
  )
}

MoviesDetailsMore.propTypes = {
    id: PropTypes.string.isRequired,
};
