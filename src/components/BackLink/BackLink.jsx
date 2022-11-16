import PropTypes from 'prop-types';
import { StyledLink } from './BackLink.styled';

export const BackLink = ({to, children }) => {

  return (
    <StyledLink to={to}>
      {children}
    </StyledLink>
  );
};

BackLink.propTypes = {
  to: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,]),
  children: PropTypes.string.isRequired,
};