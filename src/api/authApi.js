import axiosClient from "./axiosClient";

const url = "http://localhost:5000/api/v1/auth"

class AuthApi {

    login(userForm) {
        console.log("Before call api", userForm);
        return axiosClient.post(`http://localhost:5000/api/v1/auth/login`, userForm);
    }

    register(userForm) {
        return axiosClient.post(`${url}/register`, userForm);
    }

    checkAuthStatus() {
        return axiosClient.get(`${url}`);
    }
}

const authApi = new AuthApi();

export default authApi;