import axios, { AxiosResponse } from 'axios';

axios.defaults.baseURL = 'https://localhost:44376/api/v1';
const responseBody = (response: AxiosResponse) => response.data;

const apiRequests = {
    get: (url: string) => axios.get(url).then(responseBody),
    post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
    put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
    delete: (url: string) => axios.delete(url).then(responseBody)
}

export default apiRequests;