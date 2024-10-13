import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://telegram-test-project-fd11f1f0ee53.herokuapp.com/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;