import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "pages/Home";
import Layout from "./Layout/Layout";


const Movies = lazy(() => import('pages/Movies'));
const MoviesDetails = lazy(() => import('pages/MoviesDetails'));
const Cast = lazy(() => import('pages/Cast'));
const Reviews = lazy(() => import('pages/Reviews'));

export const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Layout>Layout</Layout>}>
        <Route index element={<Home></Home>}></Route>
        <Route path='movies' element={<Movies></Movies>}></Route>
          <Route path='movies/:id' element={<MoviesDetails />}>
            <Route path='cast' element={<Cast>Cast</Cast>}></Route>
            <Route path='reviews' element={<Reviews />}></Route>
          </Route>
        <Route path="*" element={<div>Not found page! Please reload the site!</div>}></Route>
      </Route>
      </Routes>
    </>
  );
};
