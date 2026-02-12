import { useNavigate } from 'react-router';

import backArrow from '../../assets/icons/back-arrow-icon.svg?react';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';

const BackBtn = () => {
  const navigate = useNavigate();
  return (
    <Button 
      variant='backBtn' 
      className='group mb-5' 
      type='button' 
      onClick={() => navigate(-1)}>
        <Icon
          src={backArrow}
          className='text-gray-600 group-hover:text-indigo-600 group-active:text-indigo-600'
        />
          Back
    </Button>
  );
};

export default BackBtn;
