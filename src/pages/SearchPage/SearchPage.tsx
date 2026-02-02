import { useSearchParams } from 'react-router';

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
      {isLoading && <h3>Please wait... Your list are loading.</h3>}
      {searchText === null && <h3>Please type your request title.</h3>}
      {error && searchText && <h3>Error. {error}</h3>}
      {!isLoading && !error && <MovieList list={movies} />}
    </>
  );
};

export default SearchPage;
