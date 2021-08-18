import axios from "axios";

const api = axios.create({
    baseURL: 'https://611cd5067d273a0017e2f45d.mockapi.io/'
})

export default api;