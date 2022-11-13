import { useState, useEffect } from "react";
import { useLocation  } from "react-router-dom";
import TheMoviedb from "components/TheMoviedb.API/TheMoviedb.API";
import { CastList } from "components/CastList/CastList";
import { Section } from "components/Layout/Layout.styled";

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
  }, []);

  return (
    <Section>
      {movie && <CastList movie={movie}></CastList>}
    </Section>
  );
}

export default Cast;