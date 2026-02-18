import type { MovieShort } from '@/types';

import Icon from '@/components/Icon/Icon';
import MovieList from '@/components/MovieList/MovieList';

interface MovieLineProps {
  label: string;
  icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  movies: MovieShort[];
}

const MovieLine = ({ label, movies, icon }: MovieLineProps) => {
  return (
    <section>
      <p className='mb-3 flex flex-row items-center gap-2 text-3xl font-semibold md:mb-8'>
        {icon && <Icon src={icon} size='md' className='text-indigo-600' />}
        {label}
      </p>
      <MovieList list={movies} />
    </section>
  );
};

export default MovieLine;
