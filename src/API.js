import axios from "axios";

const apiKey = process.env.REACT_APP_RAWG_API_KEY;

const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: apiKey,
    },
});

const getGenres = () => axiosInstance.get('/genres');

const getAllGames = () => axiosInstance.get('/games');

export { getGenres, getAllGames };