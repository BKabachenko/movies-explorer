import { useSearchParams } from 'react-router';

import MovieListSkeleton from '@/components/MovieList/MovieListSkeleton';
import { useSearch } from '@/hooks/useSearch';

import BackBtn from '../../components/BackBtn/BackBtn';
import MovieList from '../../components/MovieList/MovieList';

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const searchText = searchParams.get('search') || '';

  const { movies, isLoading, error } = useSearch(searchText);

  return (
    <>
      <BackBtn />
      {searchText === null && <MovieListSkeleton count={5} />}
      {error && searchText && <h3>Error. {error}</h3>}
      {!isLoading && !error && <MovieList list={movies} />}
    </>
  );
};

export default SearchPage;
