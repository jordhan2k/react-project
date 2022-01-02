import { snackbarActionTypes } from "../actions/actionTypes";

const initialState = {
    show: false,
    message: "",
    severity: ""
}

const snackbarReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case snackbarActionTypes.OPEN:
            return {
                show: true,
                message: payload.message,
                severity: payload.severity
            };

        case snackbarActionTypes.CLOSE:
            return {
                ...initialState
            }

        default:
            return state;
    }
}

export default snackbarReducer;