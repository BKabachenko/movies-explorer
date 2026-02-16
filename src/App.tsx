import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router';

import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import MainLayout from './layouts/MainLayout/MainLayout';
import HomeSkeleton from './pages/Home/HomeSkeleton';
import MovieDetailsSkeleton from './pages/MovieDetails/MovieDetailsSkeleton';
import SearchPageSkeleton from './pages/SearchPage/SearchPageSkeleton';

const Home = lazy(() => import('@/pages/Home/Home'));
const MovieDetails = lazy(() => import('@/pages/MovieDetails/MovieDetails'));
const SearchPage = lazy(() => import('@/pages/SearchPage/SearchPage'));
const Favorites = lazy(() => import('@/pages/Favorites/Favorites'));

function App() {
  return (
    <ErrorBoundary>
      <Routes>
        <Route element={<MainLayout />}>
          <Route
            index
            element={
              <Suspense fallback={<HomeSkeleton />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path='movie/:id'
            element={
              <Suspense fallback={<MovieDetailsSkeleton />}>
                <MovieDetails />
              </Suspense>
            }
          />
          <Route
            path='/search'
            element={
              <Suspense fallback={<SearchPageSkeleton />}>
                <SearchPage />
              </Suspense>
            }
          />
          <Route path='/favorite' element={<Favorites />} />
        </Route>
      </Routes>
    </ErrorBoundary>
  );
}

export default App;
