import { todoActionTypes } from "../../utils/constants";

const initialState = {
    todos: []

}


const todoReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case todoActionTypes.ADD:
            return {
                ...state,
                todos: [...state.todos, payload]
            };

        case todoActionTypes.DELETE:
            return {
                ...state,
                todos: state.todos.filter(todo => todo._id !== payload)
            }

        case todoActionTypes.EDIT:
            return {
                ...state,
                todos: state.todos.map(todo => todo._id === payload._id ? { ...payload } : todo)
            }
        default:
            return state;

    }

}

export default todoReducer;