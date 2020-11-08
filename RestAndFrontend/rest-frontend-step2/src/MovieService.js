import axios from 'axios';

export const ServerAddress = "http://localhost:3001";

export const resolveMovieList = () => {
    return axios.get(`${ServerAddress}/movies`);
}

export const resolveMovieDetail = (movieId) => {    
    return axios.get(`${ServerAddress}/movies/${movieId}`);
}
