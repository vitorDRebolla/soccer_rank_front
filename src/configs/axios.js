import axios from 'axios'

const api = axios.create({
    baseURL: 'https://campeonato-brasileiro.herokuapp.com/',
    timeout: 5000
});

export default api;