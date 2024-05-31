
import { useState, useEffect } from 'react'
import { getTrendMovies } from '../../Api';
import MovieList from '../../components/MovieList/MovieList';
import Load from '../../components/Load/Load';
import css from './HomePage.module.css'

export default function HomePage() {
    const [trendMovies, setTrendMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    
    
    useEffect(() => {
        async function getMovies() {
            setLoading(true);
            try {
                const data = await getTrendMovies();
                setTrendMovies(data.results);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }
      getMovies();
    }, [])

  return (
    <main className={css.container}>
      <h1>Trending today</h1>
      <MovieList movies={trendMovies}/>
       {loading && <Load />}
    </main>
  );
}
