import { all } from "redux-saga/effects";
import authSaga from "./authSaga";
import playerSaga from "./playerSaga";
import todoSaga from "./todoSaga";


function* rootSaga() {
    yield all([
        todoSaga(),
        playerSaga(),
        authSaga()
    ])
}

export default rootSaga;