import { useParams, useLocation, Link, Outlet } from "react-router-dom"
import { useState, useEffect, Suspense } from 'react'
import Load from "../../components/Load/Load"
import { notifyError } from "../../components/Toast/Toast"
import { getMovieDetails } from "../../Api"

export default function MovieDetailsPage() {
    const [movieDetails, setDetails] = useState({});
    const location = useLocation();
    const { movieId } = useParams();

    useEffect(() => {
        if (!movieId) return;
        const getDetails = async () => {
            try {
                const data = await getMovieDetails(movieId);
                setDetails(data)
            } catch (error) {
                notifyError('Something went wrong. Please, try again!');
                console.error(error);
            }
        }
        getDetails();
    }, [movieId]);

    const {original_title, overview, genres, poster_path, vote_average } = movieDetails;
    const scoreToFixed = Number(vote_average).toFixed(2);

    return (
        <main>
            <div>
                <Link to={location.state?.from ?? '/'}>Go back</Link>
                <div>
                    <img src={poster_path
                    ? `https://image.tmdb.org/t/p/w300${poster_path}`
                    : `http://www.suryalaya.org/images/no_image.jpg`} 
                    loading='lazy' alt='Movie poster'/>
                    <div>
                        <h1>{original_title}</h1>
                        <p>User score: {scoreToFixed}</p>
                        <h2>Overview</h2>
                        <p>{overview}</p>
                        <h2>Genres</h2>
                        <ul>
                            {genres &&
                            genres.length &&
                            genres.map(({ id, name }) => <li key={id}>{name}</li>)}
                        </ul>
                    </div>
                </div>
                <div>
                    <h3>Additional information</h3>
                    <ul>
                        <li>
                            <Link to="cast" state={{ ...location.state }}>Cast</Link>
                        </li>
                        <li>
                            {' '}
                            <Link to="reviews" state={{ ...location.state }}>Reviews</Link>
                        </li>
                    </ul>
                </div>
                <Suspense fallback={<Load/>}>
                    <Outlet />
                </Suspense>
            </div>
        </main>
    )
}