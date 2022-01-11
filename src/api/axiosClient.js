import axios from "axios";
import queryString from "query-string"

const axiosClient = axios.create({
    headers: {
        'content-type': 'application/json'
    },
    paramsSerializer: params => queryString.stringify(params)
});

export const setAuthToken = token => {
    if (token) {
        axiosClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
        delete axiosClient.defaults.headers.common["Authorization"];
    }
}

export default axiosClient;