import { useNavigate } from 'react-router';

import backArrow from '../../assets/icons/back-arrow-icon.svg?react';
import Icon from '../Icon/Icon';

const BackBtn = () => {
  const navigate = useNavigate();
  return (
    <button
      className='group my-5 flex h-auto w-20 cursor-pointer flex-row justify-center gap-1 rounded-md border border-gray-200 bg-white p-2 font-semibold text-gray-500 shadow-sm transition-colors hover:bg-indigo-50 hover:text-indigo-600 active:bg-indigo-200 active:text-indigo-600'
      type='button'
      onClick={() => navigate(-1)}
    >
      <Icon
        src={backArrow}
        className='translate-y-0.75 text-gray-500 group-hover:text-indigo-600 group-active:text-indigo-600'
      />
      Back
    </button>
  );
};

export default BackBtn;
