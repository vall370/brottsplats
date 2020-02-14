import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost/ltu1/public'
});


export default instance;