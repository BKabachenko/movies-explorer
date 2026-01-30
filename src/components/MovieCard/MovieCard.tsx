import { Link } from 'react-router';

import type { MovieShort } from '@/types';

import { DEFAULT_POSTER } from '@/constants';

type MovieCardProps = {
  movie: MovieShort;
};

const MovieCard = ({ movie }: MovieCardProps) => {
  const { Title, Poster, Year, Type, imdbID } = movie;

  const posterLink = Poster === 'N/A' ? DEFAULT_POSTER : Poster;

  return (
    <Link to={`/movie/${imdbID}`}>
      <article className='group inset-shadow-xl inset-shadow-xl flex h-full cursor-pointer flex-col gap-2 rounded-xl inset-shadow-indigo-500 transition-all hover:scale-103'>
        <div className='flex w-full justify-center rounded-xl border border-gray-300'>
          <img
            src={posterLink}
            alt={`${Title} poster`}
            loading='lazy'
            onError={(e) => {
              e.currentTarget.src = DEFAULT_POSTER;
            }}
            className='aspect-2/3 h-full w-full rounded-xl object-cover object-center group-hover:shadow-xl group-hover:shadow-indigo-200/50'
          />
        </div>
        <div className='flex flex-col items-start'>
          <h3
            className='mb-2 line-clamp-1 text-lg font-bold text-ellipsis group-hover:text-indigo-600'
            title={Title}
          >
            {Title}
          </h3>
          <div className='flex flex-row items-center gap-2 text-sm'>
            <p className='text-gray-600'>{Year}</p>
            <span className='h-1 w-1 translate-y-px rounded-xl bg-gray-700'></span>
            <p className='text-gray-600'>{Type}</p>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default MovieCard;
