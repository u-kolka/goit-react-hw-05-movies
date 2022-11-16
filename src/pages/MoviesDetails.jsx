import { useState, useEffect, Suspense } from "react";
import { useParams, Outlet } from "react-router-dom";
import TheMoviedb from "components/TheMoviedb.API/TheMoviedb.API";
import { MoviesDetailsItem } from "components/MoviesDetails/MoviesDetailsItem";
import { MoviesDetailsMore } from "components/MoviesDetails/MoviesDetailsMore";

const MoviesDetails = () => {
  const [movie, setMovie] = useState(null);
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


  const { genres, overview, vote_average, poster_path, release_date, title } = movie;

  return (
    <main>
      <MoviesDetailsItem genres={genres} overview={overview} rating={vote_average} poster={poster_path} date={release_date} title={title}></MoviesDetailsItem>
      <MoviesDetailsMore id={id}></MoviesDetailsMore>
      <Suspense>
        <Outlet></Outlet>
      </Suspense>
    </main>
  );
};

export default MoviesDetails;