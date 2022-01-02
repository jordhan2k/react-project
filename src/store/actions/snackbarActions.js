import { snackbarActionTypes } from './actionTypes'

export const openSnackbar = (content) => ({
    type: snackbarActionTypes.OPEN,
    payload: content
});
export const closeSnackbar = () => ({
    type: snackbarActionTypes.CLOSE
});