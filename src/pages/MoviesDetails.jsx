import { useState, useEffect } from "react";
import { useParams, Link, useLocation, Outlet } from "react-router-dom";
import TheMoviedb from "components/TheMoviedb.API/TheMoviedb.API";
import { MoviesDetailsItem } from "components/MoviesDetails/MoviesDetailsItem";


const navItems = [
    { href: 'cast', text: 'Cast' },
    { href: 'reviews', text: 'Reviews' },
];

const MoviesDetails = () => {
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const {id} = useParams(); 
  console.log(id)

  useEffect(() => {
    const controller = new AbortController();
    try {
      (async function fetchMovie() {
        const movie = await TheMoviedb.fetchMovieByID(id);
        setMovie(prevMovie => {
          if (prevMovie !== movie) {
            return movie;
          }
        })
      })();
    } catch (error) {
      console.error(error);
    }

    return () => {
      controller.abort()
    };
  }, [id]);
  
  if (!movie) {
    return null;
  }
  console.log(location.state.from)
  const backLinkHref = location.state?.from ?? `/movies`
    
    const { genres, overview, vote_average, poster_path, release_date, title } = movie;
  return (
    <main>
      <Link to={backLinkHref}>Back</Link>
      <MoviesDetailsItem genres={genres} overview={overview} rating={vote_average} poster={poster_path} date={release_date} title={title}></MoviesDetailsItem>
      <ul>
      {navItems.map(({ href, text }) =>
        <Link key={href} to={href} state={{ id }}>
          {text} 
        </ Link>)}
      </ul>
      <Outlet></Outlet>
    </main>
  );
};

export default MoviesDetails;