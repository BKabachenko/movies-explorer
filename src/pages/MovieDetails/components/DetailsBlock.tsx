import infoIcon from '../../../assets/icons/info.svg?react';
import peopleIcon from '../../../assets/icons/people.svg?react';
import Badge from '../../../components/Badge/Badge';
import Icon from '../../../components/Icon/Icon';
import type { MovieFull } from '../../../types';
import { splitStringToArray } from '../../../utils/Helpers';
import DetailLine from './DetailLine';

interface DetailsBlockProps {
  movie: MovieFull;
}

const DetailsBlock = ({ movie }: DetailsBlockProps) => {
  return (
    <div className='flex flex-col justify-around gap-8 md:flex-row'>
      <div className='flex flex-1 flex-col gap-5'>
        <div className='flex flex-col'>
          <p className='mb-2 flex-1 text-center text-xl font-semibold md:text-left'>Plot</p>
          {movie.Plot}
        </div>
        <div className='flex flex-col'>
          <p className='mb-2 flex-1 text-center text-xl font-semibold md:text-left'>Cast</p>
          <div className='flex flex-col justify-center gap-2 sm:flex-row md:justify-start'>
            {splitStringToArray(movie.Actors).map((e, i) => (
              <Badge key={i} variant='author'>
                <Icon src={peopleIcon} />
                {e}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      <div className='flex-1 rounded-xl bg-gray-100 p-8 md:max-w-100'>
        <div className='flex items-center gap-2 text-xl font-semibold'>
          <Icon src={infoIcon} size='md' className='translate-y-0.4 text-indigo-600' />
          Details
        </div>
        <DetailLine title='Director'>{movie.Director}</DetailLine>
        <DetailLine title='Writer'>{movie.Writer}</DetailLine>
        <DetailLine title='Type'>{movie.Type}</DetailLine>
        <DetailLine title='Awards'>{movie.Awards}</DetailLine>
        <DetailLine title='Country'>{movie.Country}</DetailLine>
        <DetailLine title='Language'>{movie.Language}</DetailLine>
        <DetailLine title='Production'>{movie.Production}</DetailLine>
      </div>
    </div>
  );
};

export default DetailsBlock;
