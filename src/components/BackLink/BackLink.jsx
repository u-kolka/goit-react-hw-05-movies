import PropTypes from 'prop-types';
import { Link } from "components/MoviesDetails/MoviesDetails.styled";

export const BackLink = ({to, children }) => {

  return (
    <Link to={to}>
      {children}
    </Link>
  );
};

BackLink.propTypes = {
  to: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,]),
  children: PropTypes.string.isRequired,
};