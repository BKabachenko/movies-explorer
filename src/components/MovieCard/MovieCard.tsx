import { Link } from 'react-router';

import type { MovieShort } from '../../types';

type MovieCardProps = {
  movie: MovieShort;
};

const MovieCard = ({ movie }: MovieCardProps) => {
  const posterLink =
    movie.Poster === 'N/A'
      ? 'https://dummyimage.com/300x450/787878/ffffff&text=No+Preview'
      : movie.Poster;

  return (
    <Link to={`/movie/${movie.imdbID}`}>
      <article className='group flex h-full cursor-pointer flex-col gap-2 rounded-xl hover:scale-103 transition-all inset-shadow-xl inset-shadow-xl inset-shadow-indigo-500 '>
        <div className='flex w-full justify-center rounded-xl border border-gray-300'>
          <img
            src={posterLink}
            alt={movie.Title + ' poster image'}
            loading='lazy'
            className='aspect-2/3 h-full w-full rounded-xl object-cover object-center group-hover:shadow-xl  group-hover:shadow-indigo-200/50'
          />
        </div>
        <div className='flex flex-col items-start'>
          <h3 className='mb-2 line-clamp-1 text-lg font-bold text-ellipsis group-hover:text-indigo-600' title={movie.Title}>
            {movie.Title}
          </h3>
          <div className='flex flex-row items-center gap-2 text-sm'>
            <p className='text-gray-600'>{movie.Year}</p>
            <span className='h-1 w-1 translate-y-px rounded-xl bg-gray-700'></span>
            <p className='text-gray-600'>{movie.Type}</p>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default MovieCard;
