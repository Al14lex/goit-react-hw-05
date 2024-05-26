import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieReviews } from '../../Api';
import { notifyError } from '../Toast/Toast';
import css from './MovieReviews.module.css'

export default function MovieReviews() {
   const [reviewsList, setReviewsList] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        const getReviews = async (movieId) => {
            try {
                const data = await getMovieReviews(movieId);
                setReviewsList(data.results);
            } catch (error) {
                notifyError("Oops, something went wrong. Please try again.");
                console.log(error);
            }
        }
        getReviews(movieId);
    }, [movieId]); 

    return (
        <main>
            <ul className={css.review}>
                { reviewsList.length > 0 
                    ? reviewsList.map(({author, content, id}) => (
                            <li key={id} className={css.reviewItm}>
                                <p className={css.autor}>{author}</p>
                                <p>{content}</p>
                            </li>
                        ))
                    : <p>We do not have any reviews for this movie yet</p>
                }
            </ul>
        </main>
    );
}