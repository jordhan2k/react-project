import axios from "axios";
import { statusTypes, todoActionTypes, todosApi } from "../../utils/constants";
import { addTodo, loadAllTodo, editTodo, deleteTodo } from "../actions/todoActions";

const initialState = {
    status: statusTypes.IDLE,
    todos: []
}



export default function todoReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case todoActionTypes.LOAD_ALL:
            return {
                ...state,
                todos: [...payload]
            };

        case todoActionTypes.ADD:
            return {
                ...state,
                todos: [payload, ...state.todos]
            };

        case todoActionTypes.DELETE:
            return {
                ...state,
                todos: state.todos.filter(todo => todo._id !== payload)
            };

        case todoActionTypes.EDIT:
            return {
                ...state,
                todos: state.todos.map(todo => todo._id === payload._id ? { ...payload } : todo)
            };
        default:
            return state;

    }

}

// thunk functions
export const fetchAllTodos = () => async (dispatch, getState) => {
    try {
        const response = await axios.get(`${todosApi}`);
        if (response.data) {
            dispatch(loadAllTodo(response.data));
        }
    } catch (error) {
        console.log(error);
    }
}

export const addNewTodo = todo => async (dispatch, getState) => {
    try {
        const response = await axios.post(`${todosApi}`, todo);
        if (response.data) {
            dispatch(addTodo(todo));
        }
    } catch (error) {
        console.log(error);
    }
}

export const updateTodo = todo => async (dispatch, getState) => {
    try {
        const response = await axios.put(`${todosApi}/${todo._id}`, todo);
        if (response.data) {
            dispatch(editTodo(todo));
        }
    } catch (error) {
        console.log(error);
    }
}


export const removeTodo = todoId => async (dispatch, getState) => {
    try {
        const response = await axios.delete(`${todosApi}/${todoId}`);
        if (response.data) {
            dispatch(deleteTodo(todoId));
        }
    } catch (error) {
        console.log(error);
    }
}
