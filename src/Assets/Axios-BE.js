import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://iwcportfolio.firebaseio.com/'
})

export default instance;