import { useSearchParams} from "react-router-dom";
import { useState, useEffect } from 'react';
import { SearchMovie } from '../../Api';
import SearchForm from "../../components/SearchForm/SearchForm";
import Load from "../../components/Load/Load";
import { ToastContainer } from 'react-toastify'; 
import { notifyError } from "../../components/Toast/Toast";
import 'react-toastify/dist/ReactToastify.css';
import MovieList from "../../components/MovieList/MovieList";

export default function MoviesPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const movieName = searchParams.get('movieName') ?? '';
    const [moviesList, setMoviesList] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    
   useEffect(() => {
        if (movieName === '') {
            return;
        }
        setMoviesList([]);
        setLoading(true);
        const getMovieFromInput = async (movieName) => {
            try {
                await SearchMovie(movieName).then(data => {
                if (!data.results.length) {
                    setLoading(false);
                    setError(true);
                    return notifyError(
                    'There is no movies with this request'
                    );
                }
                setError(false);
                setMoviesList(data.results);
                setLoading(false);
            })
            } catch (error) {
                notifyError('Something went wrong. Please, try again!');
                console.log(error);
            }
        }
        getMovieFromInput(movieName);
    }, [movieName]);

  const handleSubmit = movieName => {
    setSearchParams({ movieName });
    };
    
 return (
        <main>
         <div>
             <ToastContainer />
             <SearchForm onSubmit={handleSubmit} />
                {error && <p>There is no movies with this request.</p>}
                <MovieList movies={moviesList}/>
             {loading && <Load/>}
            </div>
        </main>
    )
}