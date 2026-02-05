import { beforeEach, describe, expect, it } from 'vitest';

import { useFavoritesStore } from './useFavoritesStore';

const movieMock = {
  imdbID: 'tt123',
  Title: 'Matrix',
  Year: '1999',
  Type: 'movie',
  Poster: 'N/A',
};

describe('useFavoritesStore test', () => {
  beforeEach(() => {
    localStorage.clear();
    useFavoritesStore.setState({ movieList: [] });
  });

  it('should add a movie to the list', () => {
    useFavoritesStore.getState().addMovie(movieMock);

    const list = useFavoritesStore.getState().movieList;

    expect(list).toHaveLength(1);

    expect(list[0]).toEqual(movieMock);
  });

  it('should remove a movie from the list', () => {
    useFavoritesStore.getState().addMovie(movieMock);

    useFavoritesStore.getState().removeMovie(movieMock.imdbID);

    const list = useFavoritesStore.getState().movieList;
    const isMovie = list.find((e) => e.imdbID === movieMock.imdbID);

    expect(list).toHaveLength(0);
    expect(isMovie).toBeUndefined();
  });

  it('should not add duplicates', () => {
    useFavoritesStore.getState().addMovie(movieMock);
    useFavoritesStore.getState().addMovie(movieMock);
    useFavoritesStore.getState().addMovie(movieMock);

    const list = useFavoritesStore.getState().movieList;

    expect(list[0]).toEqual(movieMock);
    expect(list).toHaveLength(1);
  });

  it('should check movie is in list or not', () => {
    useFavoritesStore.getState().addMovie(movieMock);

    const list = useFavoritesStore.getState().movieList;
    const isFavorite = useFavoritesStore.getState().checkIsFavorite(movieMock.imdbID);

    expect(list[0]).toEqual(movieMock);
    expect(isFavorite).toBe(true);
  });
});
