import { combineReducers } from "redux";
import playerReducer from "./playerReducer";
import todoReducer from "./todoReducer";
import snackbarReducer from "./snackbarReducer";

const rootReducer = combineReducers({
    todo: todoReducer,
    player: playerReducer,
    snackbar: snackbarReducer
})

export default rootReducer;