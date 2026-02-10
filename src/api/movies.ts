import type { MovieFull, MovieJson, SearchResponse } from '../types';

const apiKey = import.meta.env.VITE_API_KEY as string;
const apiUrl = import.meta.env.VITE_API_URL as string;

if (!apiKey || !apiUrl) {
  throw new Error('Missing env variables.');
}

export const searchMovie = async (
  searchTitle: string,
  signal?: AbortSignal
): Promise<SearchResponse> => {
  try {
    const response = await fetch(`${apiUrl}?apikey=${apiKey}&s=${searchTitle}`, { signal });

    if (!response.ok) {
      throw new Error('Response isn`t OK');
    }
    const data: SearchResponse = (await response.json()) as SearchResponse;

    if (data.Response === 'False') {
      throw new Error(data.Error || 'Failed to fetch movie');
    }

    return data;
  } catch (error) {
    console.error('Api error', error);
    throw error;
  }
};

export const getMovieById = async (id: string, signal?: AbortSignal): Promise<MovieFull> => {
  try {
    const response = await fetch(`${apiUrl}?apikey=${apiKey}&i=${id}&plot=full`, { signal });

    if (!response.ok) {
      throw new Error('Response isn`t OK');
    }
    const data: MovieFull = (await response.json()) as MovieFull;

    if (data.Response === 'False') {
      throw new Error('Failed to fetch movie');
    }

    return data;
  } catch (error) {
    console.error('Api error', error);
    throw error;
  }
};

export const getMoviesFromFile = async (signal: AbortSignal): Promise<MovieJson[]> => {
  try {
    const response = await fetch('/data/top1000movies.json', { signal });

    if (!response.ok) {
      throw new Error('Response isn`t OK');
    }
    const data: MovieJson[] = (await response.json()) as MovieJson[];

    return data;
  } catch (error) {
    console.error('Api error', error);
    throw error;
  }
};
