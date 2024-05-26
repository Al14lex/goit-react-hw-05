import {Link, useLocation} from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getTrendMovies } from '../../Api';
import Load from '../../components/Load/Load';
import css from './HomePage.module.css'

export default function HomePage() {
    const [trendMovies, setTrendMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const location = useLocation();
    
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
          <ul>
              {trendMovies.map(movie => (
                <li key={movie.id} >
                            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                                {movie.title}
                            </Link>
                        </li>  
              ))}
              {loading && <Load />}
       </ul>
    </main>
  );
}
