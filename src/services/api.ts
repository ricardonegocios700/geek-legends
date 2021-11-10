import axios from 'axios';

const api = axios.create({
    baseURL: "https://geeklegends.herokuapp.com/"
})

export default api;