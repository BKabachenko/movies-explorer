import logo from '../../assets/icons/main-logo.svg?react';
import Icon from '../Icon/Icon';

const Header = () => {
  return (
    <header className='flex w-full flex-col content-center justify-center gap-2 p-2 px-10 md:flex-row'>
      <div className='flex flex-1 content-center justify-center'>
        <div className='flex h-8 w-8 content-center justify-center rounded-lg bg-indigo-800'>
          <Icon src={logo} className='h-full translate-0 !translate-y-0 text-white' />
        </div>
        <p className='p-1 font-bold'>
          Kino<span className='text-indigo-800'>Base</span>
        </p>
      </div>
      <div className='flex flex-5 content-center justify-center border border-red-500'>search</div>
    </header>
  );
};

export default Header;
