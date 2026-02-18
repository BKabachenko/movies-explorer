import { useSearchParams } from 'react-router';
import { TEXTS } from '@/constants/strings';

import BackBtn from '@/components/BackBtn/BackBtn';
import MovieList from '@/components/MovieList/MovieList';
import Pagination from '@/components/Pagination/Pagination';
import { useSearch } from '@/hooks/useSearch';

import SearchPageSkeleton from './SearchPageSkeleton';

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const searchText = searchParams.get('search') || '';
  const searchPageParam = searchParams.get('page') || '1';
  const searchPageNumber = parseInt(searchPageParam);

  const { movies, isLoading, error } = useSearch(searchText, searchPageNumber);

  if (isLoading) {
    return <SearchPageSkeleton />;
  }

  return (
    <>
      <BackBtn />
      {error && <p className='text-center'>{TEXTS.MOVIE_DETAILS.ERROR}{error} </p>}
      {(movies.length === 0 || searchText.length === 0) && !isLoading && (
        <p className='text-center'>
            {TEXTS.SEARCH.ERROR_EMPTY}
        </p>
      )}
      {!isLoading && !error && movies.length > 0 && (
        <>
          <MovieList list={movies} />
          <div className='flex justify-center pt-10'>
            <Pagination maxValue={100} />
          </div>
        </>
      )}
    </>
  );
};

export default SearchPage;
