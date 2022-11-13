import { Link } from "components/MoviesDetails/MoviesDetails.styled";

export const BackLink = ({to, children }) => {

  return (
    <Link to={to}>
      {children}
    </Link>
  );
};