import logo from '@/assets/icons/main-logo.svg?react';

import Icon from '../Icon/Icon';

const Loader = () => {
  return (
    <div className='flex h-full w-full flex-col items-center justify-center gap-2 dark:bg-gray-800'>
      <div className='flex animate-pulse flex-col items-center'>
        <div className='rounded-xl bg-gray-900 p-2'>
          <Icon src={logo} size='lg' className='text-indigo-500' />
        </div>
        <h2 className='mt-4 text-xl font-bold text-gray-800 dark:text-gray-300'>KinoBase</h2>
      </div>
    </div>
  );
};

export default Loader;
