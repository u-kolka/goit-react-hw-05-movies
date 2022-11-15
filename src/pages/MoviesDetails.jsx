import { useState, useEffect } from "react";
import { useParams, useLocation, Outlet } from "react-router-dom";
import TheMoviedb from "components/TheMoviedb.API/TheMoviedb.API";
import { MoviesDetailsItem } from "components/MoviesDetails/MoviesDetailsItem";
import { MoviesDetailsMore } from "components/MoviesDetails/MoviesDetailsMore";
import { BackLink } from '../components/BackLink/BackLink'

const MoviesDetails = () => {
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const {id} = useParams(); 

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

  const backLinkHref = location.state?.from ?? `/movies`
  const { genres, overview, vote_average, poster_path, release_date, title } = movie;

  return (
    <main>
      <BackLink to={backLinkHref}>Go back</BackLink>
      <MoviesDetailsItem genres={genres} overview={overview} rating={vote_average} poster={poster_path} date={release_date} title={title}></MoviesDetailsItem>
      <MoviesDetailsMore id={id}></MoviesDetailsMore>
      <Outlet></Outlet>
    </main>
  );
};

export default MoviesDetails;