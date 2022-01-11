import { combineReducers } from "redux";
import playerReducer from "./playerReducer";
import todoReducer from "./todoReducer";
import snackbarReducer from "./snackbarReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
    todo: todoReducer,
    player: playerReducer,
    snackbar: snackbarReducer,
    auth: authReducer
});

export default rootReducer;