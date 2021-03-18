import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});
api.defaults.timeout = 5000;

export default api;

export const token = "d73fef118cf2371447d5544917d32f63";
export const baseImageURL = "https://image.tmdb.org/t/p/original";
export const language = "pt-BR";