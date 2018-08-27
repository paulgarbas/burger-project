import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-e16ef.firebaseio.com/'
});

export default instance;