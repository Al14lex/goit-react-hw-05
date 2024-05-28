
import { useState } from 'react';
import { notifyError } from '../../components/Toast/Toast';


export default function SearchForm({ onSubmit }) {
    const [movieName, setMovieName] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!movieName.trim()) {
            notifyError('Please, Enter the movie title');
            return;
        }
        onSubmit(movieName);
        setMovieName('');
    };



    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="movieName" 
                placeholder="Enter the title to search" 
                autoComplete="off" 
                autoFocus 
                value={movieName}
                onChange={(e) => setMovieName(e.target.value)}
                required={false}
            />
            <button type="submit" >Search</button>
        </form>
    );
}
