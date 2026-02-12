import { useSearchParams } from 'react-router';

import MovieListSkeleton from '@/components/MovieList/MovieListSkeleton';
import { useSearch } from '@/hooks/useSearch';

import BackBtn from '../../components/BackBtn/BackBtn';
import MovieList from '../../components/MovieList/MovieList';
import Pagination from '@/components/Pagination/Pagination';

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const searchText = searchParams.get('search') || '';
  const searchPageParam = searchParams.get('page') || '1';
  const searchPageNumber = parseInt(searchPageParam); 

  const { movies, isLoading, error } = useSearch(searchText, searchPageNumber);

  if(isLoading) {
    return null;
  }

  return (
    <>
      <BackBtn />
      {searchText === null && <MovieListSkeleton count={5} />}
      {error && searchText && <h3>Error. {error}</h3>}
      {!isLoading && !error && (
        <>
          <MovieList list={movies} />
          <div className='flex justify-center pt-10'>
            <Pagination maxValue={100}/>
          </div>
        </>
      )}
    </>
  );
};

export default SearchPage;
