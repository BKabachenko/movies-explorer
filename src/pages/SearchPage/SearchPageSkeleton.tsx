import BackBtn from '@/components/BackBtn/BackBtn';
import MovieListSkeleton from '@/components/MovieList/MovieListSkeleton';

const SearchPageSkeleton = () => {
  return (
    <>
      <BackBtn />
      <MovieListSkeleton count={10} />{' '}
    </>
  );
};

export default SearchPageSkeleton;
