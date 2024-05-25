import axios from 'axios';

const TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MjY3NjNiZmQxMGMyMDUxMzViZDQ3MWU1Yjg1MWI5NiIsInN1YiI6IjY2NTE4ZjNmNjVlNmQyMTMyNjk5OWQ1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.A1u5_h5aseNGqbMfEROAHyu5J01HhOHfsQPDBT-quMU';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const getTrendMovies = async () => {
    const url = 'trending/movie/day';
    const options = {
        headers: {
            Authorization: `Bearer ${TOKEN}`
        }
    };
    const response = await axios.get(url, options);
    console.log(response.data);
    return response.data;
}

export const SearchMovie = async (query) => {
    const url = `search/movie?language=en-US&query=${query}&page=1&include_adult=false`;
    const options = {
        headers: {
            Authorization: `Bearer ${TOKEN}`
        }
    };
    const response = await axios.get(url, options);
    return response.data;
}

export const SelectMovie = async (movieId) => {
    const url = `movie/${movieId}?language=en-US`;
    const options = {
        headers: {
            Authorization: `Bearer ${TOKEN}`
        }
    };
    const response = await axios.get(url, options);
    return response.data;
}

export const getMovieDetails = async (movieId) => {
  const url = `movie/${movieId}?language=en-US`;
    const options = {
        headers: {
            Authorization: `Bearer ${TOKEN}`
        }
    };
    const response = await axios.get(url, options);
    return response.data;
}

export const getMovieReviews = async (movieId) => {
    const url = `movie/${movieId}/reviews?language=en-US&page=1`;
    const options = {
        headers: {
            Authorization: `Bearer ${TOKEN}`
        }
    };
    const response = await axios.get(url, options);
    return response.data;
}

export const getMovieCast = async (movieId) => {
    const url = `movie/${movieId}/credits?language=en-US`;
    const options = {
        headers: {
            Authorization: `Bearer ${TOKEN}`
        }
    };
    const response = await axios.get(url, options);
    return response.data;
}