import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router';

import MainLayout from './layouts/MainLayout/MainLayout';

const Home = lazy(() => import('@/pages/Home/Home'));
const MovieDetails = lazy(() => import('@/pages/MovieDetails/MovieDetails'));
const SearchPage = lazy(() => import('@/pages/SearchPage/SearchPage'));
const Favorites = lazy(() => import('@/pages/Favorites/Favorites'));

function App() {
  return (
    <Suspense fallback={<div className=''>Loader...</div>}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='movie/:id' element={<MovieDetails />} />
          <Route path='/search' element={<SearchPage />} />
          <Route path='/favorite' element={<Favorites />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
