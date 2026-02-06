import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it } from 'vitest';

import type { MovieShort } from '@/types';

import { useFavoritesStore } from '@/store/useFavoritesStore';

import FavoriteBadge from './FavoriteBadge';

const movieMock: MovieShort = {
  imdbID: 'tt123',
  Title: 'Matrix',
  Year: '1999',
  Type: 'movie',
  Poster: 'N/A',
};

describe('FavoriteBadge Component', () => {
  beforeEach(() => {
    localStorage.clear();
    useFavoritesStore.setState({ movieList: [] });
  });

  it('should render "Add" btn init', () => {
    render(<FavoriteBadge movie={movieMock} />);
    const btn = screen.getByLabelText('Add to favorites');
    expect(btn).toBeInTheDocument();
  });

  it('should toggle state on click', async () => {
    const user = userEvent.setup();

    render(<FavoriteBadge movie={movieMock} />);
    let btn = screen.getByLabelText('Add to favorites');
    expect(btn).toBeInTheDocument();

    await user.click(btn);

    btn = screen.getByLabelText('Remove from favorites');
    expect(btn).toBeInTheDocument();

    expect(useFavoritesStore.getState().movieList[0]).toEqual(movieMock);

    await user.click(btn);

    btn = screen.getByLabelText('Add to favorites');
    expect(btn).toBeInTheDocument();

    expect(useFavoritesStore.getState().movieList).toHaveLength(0);
  });
});
