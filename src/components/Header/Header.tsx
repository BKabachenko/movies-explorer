import { useNavigate, useSearchParams } from 'react-router';

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
        pathname: '/',
        search: `search=${searchText}`,
      });
    } else {
      setSearchParams({});
    }
  };

  return (
    <header className='mb-4 flex w-full flex-col content-center justify-center gap-2 bg-white p-2 px-10 md:flex-row sticky top-0 z-99'>
      <div className='flex flex-1 content-center justify-center'>
        <div className='flex h-8 w-8 content-center justify-center rounded-lg bg-indigo-800'>
          <Icon src={logo} className='h-full translate-0 text-white' />
        </div>
        <p className='p-1 font-bold'>
          Kino<span className='text-indigo-800'>Base</span>
        </p>
      </div>
      <div className='flex flex-5 content-center justify-center'>
        <SearchInput onSearch={onSearch} initialValue={searchText} />
      </div>
    </header>
  );
};

export default Header;
