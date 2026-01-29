import { Link } from 'react-router';

import type { MovieFull } from '../../types';

interface MovieOneProps {
  movie: MovieFull[];
}

const OneMovie = ({ movie }: MovieOneProps) => {
  const dummyPosterLink = 'https://dummyimage.com/300x450/787878/ffffff&text=No+Preview';

  const { Title, Poster, Year, Rated, imdbID } = movie[0];

  const posterLink = Poster === 'N/sA' ? dummyPosterLink : Poster;

  return (
    <div className='h-full w-full rounded-xl bg-indigo-950 p-5 md:p-12'>
      <Link to={`/movie/${imdbID}`}>
        <article className='group inset-shadow-xl inset-shadow-xl flex h-full cursor-pointer flex-row gap-2 rounded-xl inset-shadow-indigo-500'>
          <div className='flex w-full max-w-60 justify-center rounded-xl border border-gray-300'>
            <img
              src={posterLink}
              alt={`${Title} poster`}
              loading='lazy'
              onError={(e) => {
                e.currentTarget.src = dummyPosterLink;
              }}
              className='aspect-2/3 h-full w-full rounded-xl object-cover object-center transition-all group-hover:shadow-xl group-hover:shadow-indigo-200/50'
            />
          </div>
          <div className='flex flex-col items-start'>
            <h3
              className='mb-2 line-clamp-3 text-lg font-bold text-ellipsis text-white'
              title={Title}
            >
              {Title}
            </h3>
          </div>
        </article>
      </Link>
    </div>
  );
};

export default OneMovie;
