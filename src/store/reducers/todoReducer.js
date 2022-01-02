import { statusTypes, todoFilters } from "../../utils/constants";
import { todoActionTypes, todoFilterActionTypes } from "../actions/actionTypes";

const initialState = {
    status: statusTypes.IDLE,
    todos: [],
    filter: todoFilters[0].status
}

export default function todoReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case todoActionTypes.FETCH_TODOS_REQUEST:
            return {
                ...state,
                status: statusTypes.LOADING
            };

        case todoActionTypes.FETCH_TODOS_SUCCEED:
            return {
                ...state,
                status: statusTypes.IDLE,
                todos: payload
            };

        case todoActionTypes.FETCH_TODOS_FAIL:
            return {
                ...state,
                status: statusTypes.IDLE,
            }

        case todoActionTypes.ADD_TODO_SUCCEED:
            return {
                ...state,
                todos: [payload, ...state.todos]
            };

        case todoActionTypes.DELETE_SUCCEED:
            return {
                ...state,
                todos: state.todos.filter(todo => todo._id !== payload)
            };

        case todoActionTypes.EDIT_SUCCEED:
            return {
                ...state,
                todos: state.todos.map(todo => todo._id === payload._id ? { ...payload } : todo)
            };

        case todoFilterActionTypes.STATUS_CHANGE:
            return {
                ...state,
                filter: payload
            }

        default:
            return state;

    }

}
