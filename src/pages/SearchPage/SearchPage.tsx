import { useSearchParams } from 'react-router';

import MovieListSkeleton from '@/components/MovieList/MovieListSkeleton';
import Pagination from '@/components/Pagination/Pagination';
import { useSearch } from '@/hooks/useSearch';

import BackBtn from '../../components/BackBtn/BackBtn';
import MovieList from '../../components/MovieList/MovieList';

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const searchText = searchParams.get('search') || '';
  const searchPageParam = searchParams.get('page') || '1';
  const searchPageNumber = parseInt(searchPageParam);

  const { movies, isLoading, error } = useSearch(searchText, searchPageNumber);

  return (
    <>
      <BackBtn />
      {isLoading && <MovieListSkeleton count={10} />}
      {error && <p className='text-center'>Error. {error} </p>}
      {(movies.length === 0 || searchText.length === 0) && (
        <p className='text-center'>
          We can&#39;t search for nothing! Please type what you are looking for in the search bar.
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
