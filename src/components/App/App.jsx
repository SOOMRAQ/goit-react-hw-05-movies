import AppBar from 'components/AppBar';
import MovieList from 'components/MovieList';
import Home from 'pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
const App = () => {
  return (
    <div className="App">
      <BrowserRouter basename="/goit-react-hw-05-movies">
        <AppBar />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="movie/:id" element={<h1>Movie detail Page</h1>}></Route>
          <Route path="movies/:type" element={<MovieList />}></Route>
          <Route path="/*" element={<h1>Error Page</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
