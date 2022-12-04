import AppBar from 'components/AppBar';
import MovieList from 'components/PopularMovieList';
import Home from 'pages/Home';
import MovieDetail from 'pages/MovieDetail';
import Movies from 'pages/Movies';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const App = () => {
  return (
    <BrowserRouter basename="/goit-react-hw-05-movies">
      <AppBar />
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="movies" element={<Movies />}></Route>
        <Route path="movie/:id" element={<MovieDetail />}></Route>
        <Route path="/*" element={<h1>Error Page</h1>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
