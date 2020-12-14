import axios from 'axios';

//Change port for backend support
export const api = axios.create({ baseURL: 'https://jsonplaceholder.typicode.com/' });