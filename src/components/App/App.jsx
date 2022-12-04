import AppBar from 'components/AppBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
const App = () => {
  return (
    <div className="App">
      <BrowserRouter basename="/goit-react-hw-05-movies">
        <AppBar />
        <Routes>
          <Route index element={<h1>Hello World</h1>}></Route>
          <Route path="movie/:id" element={<h1>Movie detail Page</h1>}></Route>
          <Route
            path="movies/:type"
            element={<h1>Movies List Page</h1>}
          ></Route>
          <Route path="/*" element={<h1>Error Page</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
