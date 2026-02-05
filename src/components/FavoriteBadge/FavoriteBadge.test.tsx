import { useFavoritesStore } from '@/store/useFavoritesStore';
import { render, screen, fireEvent } from '@testing-library/react';
import { beforeEach, describe, it } from 'vitest';
import FavoriteBadge from './FavoriteBadge';
import type { MovieShort } from '@/types';

const movieMock:MovieShort = {
  imdbID: 'tt123',
  Title: 'Matrix',
  Year: '1999',
  Type: 'movie',
  Poster: 'N/A',
};

describe('FavoriteBadge Component', () => {
  
  beforeEach(()=> {
    localStorage.clear();
    useFavoritesStore.setState({movieList: []});
  })
  
  it('should render "Add" btn init', ()=> {
    render(<FavoriteBadge movie={movieMock} />);
    
  });
  it('', ()=> {

  });
  it('', ()=> {

  });
  it('', ()=> {

  });
});
