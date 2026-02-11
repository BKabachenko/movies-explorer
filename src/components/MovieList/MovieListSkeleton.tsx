import MovieCardSkeleton from '../MovieCard/MovieCardSkeleton';

interface MovieListSkeletonProps {
  count: number;
}

const MovieListSkeleton = ({ count }: MovieListSkeletonProps) => {
  return (
    <div className='grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-5'>
      {Array.from({ length: count }).map((_, i) => (
        <MovieCardSkeleton key={i} />
      ))}
    </div>
  );
};

export default MovieListSkeleton;
