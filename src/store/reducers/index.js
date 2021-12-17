import { combineReducers } from "redux";
import playerReducer from "./playerReducer";
import todoReducer from "./todoReducer";


const rootReducer = combineReducers({
    todo: todoReducer,
    player: playerReducer
})

export default rootReducer;