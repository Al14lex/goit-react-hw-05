import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieCast } from '../../Api';
import { notifyError } from '../Toast/Toast';
import css from './MovieCast.module.css'

export default function MovieCast() {
   const [castList, setCastList] = useState([]);
   const { movieId } = useParams();


    useEffect(() => {
    const getCast = async (movieId) => {
      try {
        const data = await getMovieCast(movieId);
        setCastList(data.cast);
      } catch (error) {
        notifyError("Oops, something went wrong. Please try again.");
        console.error(error);
      }
    }
    getCast(movieId);
  }, [movieId]);

   return (
    <ul className={css.cast}>
      {castList.length > 0 
        ? castList.map(({ id, name, profile_path, character }) => (
          <li key={id}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w200${profile_path}`
                  : `http://www.suryalaya.org/images/no_image.jpg`
              }
              alt="actor"
              loading="lazy"
              width='120'
            />
            <h3>{name}</h3>
            <p> Character: {character}</p>
          </li>
        ))
        : "Sorry, there isn't any info :("
      }
    </ul>
  ) 
}
