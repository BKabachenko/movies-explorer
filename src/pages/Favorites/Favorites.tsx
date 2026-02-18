import heartIcon from '@/assets/icons/heart.svg?react';
import BackBtn from '@/components/BackBtn/BackBtn';
import Icon from '@/components/Icon/Icon';
import MovieList from '@/components/MovieList/MovieList';
import { useFavoritesStore } from '@/store/useFavoritesStore';
import { TEXTS } from '@/constants/strings';

const emptyList = () => {
  return (
    <>
      <div className='flex flex-col pt-15 text-center'>
        <h3 className='text-2xl font-semibold text-gray-900'>{TEXTS.FAVORITES.EMPTY_TITLE}</h3>
        <p className='font-semibold text-gray-500'>
          {TEXTS.FAVORITES.EMPTY_TEXT}
        </p>
      </div>
    </>
  );
};

const Favorites = () => {
  const movieList = useFavoritesStore((s) => s.movieList);

  return (
    <div className='animate-fade-in'>
      <BackBtn />
      <div className='mb-5 flex flex-row items-center gap-5'>
        <div className='flex items-center justify-center rounded-xl bg-indigo-300/50 p-2'>
          <Icon src={heartIcon} size='lg' className='fill-indigo-600 text-indigo-600' />
        </div>
        <div className='flex flex-col'>
          <h3 className='text-2xl font-semibold text-gray-900'>{TEXTS.FAVORITES.TITLE}</h3>
          <p className='font-semibold text-gray-500'>{TEXTS.FAVORITES.SUBTITLE}</p>
        </div>
      </div>
      {!movieList || !movieList.length ? emptyList() : <MovieList list={movieList} />}
    </div>
  );
};

export default Favorites;
