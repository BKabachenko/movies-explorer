import type { MovieShort } from '@/types';

import MovieCard from '../MovieCard/MovieCard';

type MovieListProps = {
  list: MovieShort[];
};

const MovieList = ({ list }: MovieListProps) => {
  if (list.length === 0 || !list)
    return (
      <div className='flex flex-col items-center'>
        <h2>No Films</h2>
        <p>Please change search request.</p>
      </div>
    );

  return (
    <div className='grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-5'>
      {list.map((item) => (
        <MovieCard key={item.imdbID} movie={item} />
      ))}
    </div>
  );
};

export default MovieList;
