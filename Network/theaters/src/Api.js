import axios from 'axios';

export const resolveMovies = async () => {
    const ret = await axios.get(`${process.env.REACT_APP_Server_Address}/movies`);
    console.log('ret.data :', ret.data);
    return ret.data;
}