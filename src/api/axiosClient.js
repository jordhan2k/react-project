import axios from "axios";
import queryString from "query-string"

export const BASE_API_URL = "https://61c0b46e33f24c00178235a4.mockapi.io/api/v1";


const axiosClient = axios.create({
    baseURL: BASE_API_URL,
    headers:{
        'content-type' : 'application/json'
    },
    paramsSerializer: params => queryString.stringify(params)
});



export default axiosClient;