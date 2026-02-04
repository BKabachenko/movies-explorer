import { Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
import MainLayout from "./layouts/MainLayout/MainLayout";
import SearchPage from "./pages/SearchPage/SearchPage";
import Favorites from "./pages/Favorites/Favorites";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="movie/:id" element={<MovieDetails />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/favorite" element={<Favorites />} />
      </Route>
    </Routes>
  );
}

export default App;
