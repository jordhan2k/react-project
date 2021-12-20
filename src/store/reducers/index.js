import { combineReducers } from "redux";
import playerReducer from "./playerReducer";
import { todoFilterReducer } from "./todoFilterReducer";
import todoReducer from "./todoReducer";


const rootReducer = combineReducers({
    todo: todoReducer,
    todoFilter: todoFilterReducer,
    player: playerReducer
})

export default rootReducer;