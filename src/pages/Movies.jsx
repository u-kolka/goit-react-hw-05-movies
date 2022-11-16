import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { toast } from 'react-toastify';
import { StyledContainer } from "components/ToastContainer/ToastContainer.styled";
import { Pagination } from "components/Pagination/Pagination.styled";
import Searchbar from "components/Searchbar/Searchbar";
import TheMoviedb from "components/TheMoviedb.API/TheMoviedb.API";
import { MoviesList } from "components/MoviesList/MoviesList";
import { Section } from "components/Layout/Layout.styled";

const Movies = () => {
  const [movies, setMovies] = useState(null); 
  const [totalPage, setTotalPage] = useState(0); 
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");
  const page = searchParams.get("page");


  useEffect(() => {
    if (query === '' || query === null) {
      return;
    };
    const controller = new AbortController();
    try {
      (async function fetchMovies() {
        const nextMovies = await TheMoviedb.fetchMoviesByQuery(query, page);
        if (nextMovies.results.length === 0) {
          return toast.info('🛸 Search result not successful. Enter the correct movie name.');
        }

        setMovies([...nextMovies.results]);
        setTotalPage(nextMovies.total_pages)
      })();
    } catch (error) {
      console.error(error);
    };

    return () => {
      controller.abort();
    };
  }, [query, page]);

  useEffect(() => {
    if (movies) {
    const timerId = setTimeout(() => {
      const galleryHeight = document.getElementById('gallery')?.clientHeight
      window.scrollBy({
        top: -galleryHeight,
        left: 0,
        behavior: 'smooth'
      });
    }, 200);

    return () => {
      clearTimeout(timerId);
    };
    };
  }, [page, movies])

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const queryValue = form.elements.query.value.trim();

    setSearchParams({ query: queryValue });
    setMovies(null);
    form.reset();

    if (query === queryValue) {
      return toast.info('🛸 Please enter a new word to search.');
    }
    if (queryValue === '') {
      setSearchParams({});
      return toast.info('🛸 Please enter a word to search.');
    }
  };

  const handleClick = (page) => {
    const nextPage = Number(page.selected) + 1;
    setSearchParams({ query, page: nextPage});
  };

  return (
    <main>
      <Searchbar onSubmit={handleSubmit} value={query} />
      <Section>
        {movies && movies.length > 0 &&
          <MoviesList movies={movies}></MoviesList>}
          {totalPage > 1 &&
          <Pagination
            onPageChange={handleClick}
            className="Pagination"
            previousLabel="<"
            breakLabel="..."
            nextLabel=">"
            pageRangeDisplayed={3}
            pageCount={totalPage}
        ></Pagination>}
      <StyledContainer autoClose={3000} theme={"light"} icon={false}></StyledContainer>
      </Section>
    </main>
  )
};

export default Movies;
