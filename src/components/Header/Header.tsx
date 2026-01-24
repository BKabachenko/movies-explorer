import { Link, useNavigate, useSearchParams } from 'react-router';

import logo from '../../assets/icons/main-logo.svg?react';
import Icon from '../Icon/Icon';
import SearchInput from '../SearchInput/SearchInput';

const Header = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchText = searchParams.get('search') || '';
  const navigate = useNavigate();

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
    <header className='sticky top-0 z-99 mb-4 flex w-full justify-around bg-white/80 backdrop-blur-md'>
      <div className='flex max-w-7xl flex-1 flex-col gap-2 p-2 px-10 sm:py-4 md:flex-row md:py-6'>
        <div className='flex flex-1 justify-center'>
          <Link to='/' className='group flex flex-row'>
            <div className='flex h-8 w-8 content-center justify-center rounded-lg bg-indigo-800 transition-all group-hover:scale-110'>
              <Icon src={logo} className='h-full w-6 text-white' />
            </div>
            <p className='p-1 font-bold'>
              Kino<span className='text-indigo-800'>Base</span>
            </p>
          </Link>
        </div>
        <div className='flex-5 pr-6'>
          <SearchInput onSearch={onSearch} initialValue={searchText} />
        </div>
      </div>
    </header>
  );
};

export default Header;
