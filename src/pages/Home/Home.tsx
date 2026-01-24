import { useEffect, useState } from 'react';
import { getMovieById } from '../../api/movies';

const Home = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [movies, setMovies] = useState<string>();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch('/data/top1000movies.json');
        if (!response.ok) {
          throw new Error('File does not exist.');
        }
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('Unknown error');
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, []);


  return (
    <>
      {!isLoading && 
      <div className=''>
        <p>TOP 10</p>

      </div>
      }
    </>
  );
};

export default Home;
