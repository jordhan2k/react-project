import { authActionTypes } from "./actionTypes";

export const loadUserRequest = () => ({
    type: authActionTypes.LOAD_USER_REQUEST,
});

export const loadUserSuccess = (userInfo) => ({
    type: authActionTypes.LOAD_USER_SUCCESS,
    payload: userInfo
});

export const loadUserFail = () => ({
    type: authActionTypes.LOAD_USER_FAIL,
});

export const loginRequest = userForm => {
    console.log(userForm);
    return {
        type: authActionTypes.LOGIN_REQUEST,
        payload: userForm
    };
};


export const registerRequest = userForm => ({
    type: authActionTypes.REGISTER_REQUEST,
    payload: userForm
});

export const logoutRequest = () => ({
    type: authActionTypes.LOGOUT_REQUEST
});

export const logoutSuccess = () => ({
    type: authActionTypes.LOGOUT_SUCCESS
});

