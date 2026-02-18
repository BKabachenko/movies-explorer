import { useSearchParams } from 'react-router';
import { TEXTS } from '@/constants/strings';

import Button from '../Button/Button';

type PaginationProps = {
  maxValue: number;
};

const Pagination = ({ maxValue }: PaginationProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchPageParam = searchParams.get('page') || '1';
  const searchPageNumber = parseInt(searchPageParam);
  const params = new URLSearchParams(searchParams);

  const prevPage = () => {
    if (searchPageNumber > 1) {
      params.set('page', `${searchPageNumber - 1}`);
      setSearchParams(params);
    }
  };
  const nextPage = () => {
    if (searchPageNumber < maxValue) {
      params.set('page', `${searchPageNumber + 1}`);
      setSearchParams(params);
    }
  };

  return (
    <div className='flex gap-5'>
      <Button variant='backBtn' onClick={prevPage} disabled={searchPageNumber <= 1}>
        {TEXTS.GLOBAL.PREVIOUS_PAGE}
      </Button>
      <Button variant='backBtn' onClick={nextPage} disabled={searchPageNumber >= maxValue}>
        {TEXTS.GLOBAL.NEXT_PAGE}
      </Button>
    </div>
  );
};

export default Pagination;
