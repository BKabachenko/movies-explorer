import { Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
import MainLayout from "./layouts/MainLayout/MainLayout";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
