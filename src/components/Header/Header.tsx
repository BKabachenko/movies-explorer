import { Link, useNavigate, useSearchParams } from 'react-router';

import { useFavoritesStore } from '@/store/useFavoritesStore';

import heartIcon from '../../assets/icons/heart.svg?react';
import logo from '../../assets/icons/main-logo.svg?react';
import Icon from '../Icon/Icon';
import SearchInput from '../SearchInput/SearchInput';

const Header = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchText = searchParams.get('search') || '';
  const navigate = useNavigate();

  const favoriteCount = useFavoritesStore((s) => s.movieList.length);

  const onSearch = (searchText: string) => {
    if (searchText.trim().length > 0) {
      navigate({
        pathname: '/search',
        search: `search=${searchText}`,
      });
    } else {
      setSearchParams({});
    }
  };

  return (
    <header className='sticky top-0 z-99 mb-4 flex w-full justify-center bg-white/80 backdrop-blur-md'>
      <div className='flex w-full max-w-7xl flex-wrap gap-2 p-2 px-10 sm:py-4 md:flex-row md:flex-nowrap md:py-6'>
        <div className='order-1 flex flex-1 justify-center md:order-2 md:flex-1'>
          <Link to='/' className='group flex flex-row' viewTransition>
            <div className='flex h-8 w-8 content-center justify-center rounded-lg bg-indigo-800 transition-all group-hover:scale-110'>
              <Icon src={logo} className='h-full w-6 text-white' />
            </div>
            <p className='p-1 font-bold'>
              Kino<span className='text-indigo-800'>Base</span>
            </p>
          </Link>
        </div>

        <div className='order-3 w-full md:order-2'>
          <SearchInput onSearch={onSearch} initialValue={searchText} />
        </div>

        <Link to='/favorite' className='order-2 flex flex-1 justify-center md:order-3' viewTransition>
          <div className='flex w-fit cursor-pointer flex-row items-center gap-2 rounded-xl bg-indigo-50 p-1 px-3 hover:bg-indigo-200'>
            <Icon src={heartIcon} className='h-5 w-5' />
            Favorites
            {favoriteCount ? (
              <span className='rounded-lg bg-indigo-300 px-2'>{favoriteCount}</span>
            ) : (
              ''
            )}
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
