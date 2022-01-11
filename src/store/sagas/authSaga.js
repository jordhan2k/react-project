import { all, put, takeEvery, takeLatest } from "redux-saga/effects";
import authApi from "../../api/authApi";
import { setAuthToken } from "../../api/axiosClient";
import { LOCAL_STORAGE_TOKEN_NAME, snackbarSeverity } from "../../utils/constants";
import { authActionTypes } from "../actions/actionTypes";
import { loadUserFail, loadUserRequest, loadUserSuccess, logout, logoutSuccess } from "../actions/authActions";
import { openSnackbar } from "../actions/snackbarActions";

function* login(action) {
    const payload = action.payload;
    console.log("login saga:", payload);
    try {
        const response = yield authApi.login(payload);
        if (response.data.accessToken) {
            yield localStorage.setItem(LOCAL_STORAGE_TOKEN_NAME, response.data.accessToken);
            yield put(openSnackbar({
                severity: snackbarSeverity.SUCCESS,
                message: response.data.message
            }));
            yield put(loadUserRequest(response.data.accessToken));
        }
    } catch (error) {
        yield put(openSnackbar({
            severity: snackbarSeverity.ERROR,
            message: error
        }))
        console.log(error);
    }
}

function* loginWatcher() {
    yield takeLatest(authActionTypes.LOGIN_REQUEST, login);
}

function* register(action) {
    const payload = action.payload;
    try {
        const response = yield authApi.register(payload);
        if (response.accessToken) {
            yield localStorage.setItem(LOCAL_STORAGE_TOKEN_NAME, response.accessToken);
            yield put(openSnackbar({
                severity: snackbarSeverity.SUCCESS,
                message: response.message
            }))
        }
    } catch (error) {
        yield put(openSnackbar({
            severity: snackbarSeverity.ERROR,
            message: error
        }))
    }

}

function* registerWatcher() {
    yield takeLatest(authActionTypes.REGISTER_REQUEST, register);
}

function* loadUser() {
    if (localStorage[LOCAL_STORAGE_TOKEN_NAME]) {
        yield setAuthToken(localStorage[LOCAL_STORAGE_TOKEN_NAME]);
    }
    try {
        const response = yield authApi.checkAuthStatus();
        if (response.data.success) {
            yield put(loadUserSuccess(response.data.user));
            yield put(openSnackbar({
                severity: snackbarSeverity.SUCCESS,
                message: "Authenticated"
            }))
        }
    } catch (error) {
        yield localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME);
        yield setAuthToken(null);
        yield put(loadUserFail());
    }
}

function* loadUserWatcher() {
    yield takeLatest(authActionTypes.LOAD_USER_REQUEST, loadUser);
}

function* logoutWorker() {
    yield put(logoutSuccess());
    if (localStorage[LOCAL_STORAGE_TOKEN_NAME]) {
        localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME);
    }
    yield setAuthToken(null);
}

function* logoutWatcher() {
    yield takeLatest(authActionTypes.LOGOUT_REQUEST, logoutWorker);
}

function* authSaga() {
    yield all([
        loadUserWatcher(),
        loginWatcher(),
        registerWatcher(),
        logoutWatcher()
    ]);
}

export default authSaga;