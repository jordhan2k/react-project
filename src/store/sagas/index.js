import { all } from "redux-saga/effects";
import playerSaga from "./playerSaga";
import todoSaga from "./todoSaga";


function* rootSaga() {
    yield all([
        todoSaga(),
        playerSaga()
    ])
}

export default rootSaga;