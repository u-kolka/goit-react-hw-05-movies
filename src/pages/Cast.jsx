import { useState, useEffect } from "react";
import { useLocation  } from "react-router-dom";
import TheMoviedb from "components/TheMoviedb.API/TheMoviedb.API";
import { CastList } from "components/CastList/CastList";
import { Section } from "components/Layout/Layout.styled";
import { Text } from "components/Reviews/Reviews.styled";

const Cast = () => {
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const MovieId = location.state.id;

  useEffect(() => {
    const controller = new AbortController();
    try {
      (async function fetchMovie() {
        const movie = await TheMoviedb.fetchMovieCredits(MovieId);
        setMovie(movie)
      })();
    } catch (error) {
      console.error(error);
    }
    return () => {
      controller.abort()
    };
  }, [MovieId]);

  if (!movie) return null;

  return (
    movie.cast.length > 0 ? <Section><CastList movie={movie}></CastList></Section> :
    <Text>We don't have any casts for this movie :( </Text>
  );
}

export default Cast;