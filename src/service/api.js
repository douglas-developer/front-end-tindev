import axios from 'axios';

const api = axios.create({
    baseURL : "https://tinderdevs.herokuapp.com"
})

export default api;