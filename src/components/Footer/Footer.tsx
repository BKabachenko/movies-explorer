import logoIcon from '../../assets/icons/main-logo.svg?react';
import Icon from '../Icon/Icon';

const Footer = () => {
  return (
    <footer className='flex w-full content-center items-center justify-center border-t border-t-gray-300 bg-white md:py-10 py-5'>
      <div className='flex flex-col content-center items-center justify-center gap-2'>
        <div className='flex w-fit flex-row justify-center gap-2 rounded-xl bg-indigo-100 p-2 px-4'>
          <Icon src={logoIcon} className='text-indigo-600' size='md' />
          <span className='font-semibold'>KinoBase</span>
        </div>
        <span>2026 KinoBase. Data provided by OMDb.</span>
      </div>
    </footer>
  );
};

export default Footer;
