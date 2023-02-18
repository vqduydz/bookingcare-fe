import axios from 'axios';

export const axiosService = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
    headers: {
        'content-type': 'application/json',
    },
    // params: {
    //     _limit: 24,
    // },
});

// Add a request interceptor

axiosService.interceptors.request.use(
    async (config) => {
        // Do something before request is sent
        // Get the token from local storage
        const token = localStorage.getItem('token');
        // If a token exists, add it to the headers
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    },
);

// Add a response interceptor
axiosService.interceptors.response.use(
    (response) => {
        console.log({ response });
        if (response && response.data) {
            return response.data;
        }
        return response;
    },
    (error) => {
        console.log({ error });
        throw error.response.data;
    },
);
