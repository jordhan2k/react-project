import { authStates } from "../../utils/constants";
import { authActionTypes } from "../actions/actionTypes";

const initialState = {
    isAuthenticated: false,
    user: null,
    authState: authStates.IDLE
};

const authReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case authActionTypes.LOAD_USER_REQUEST:
            return {
                ...state,
                authState: authStates.LOADING
            }

        case authActionTypes.LOAD_USER_SUCCESS:
            return {
                ...state,
                authState: authStates.IDLE,
                user: { ...payload },
                isAuthenticated: true
            }

        case authActionTypes.LOAD_USER_FAIL:
            return {
                ...initialState
            }

        case authActionTypes.LOGOUT_SUCCESS:
            return {
                ...initialState
            }

        default:
            return state;
    }
}

export default authReducer;