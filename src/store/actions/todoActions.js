import { todoActionTypes } from "../../utils/constants";

// ACTION: a JS object with 2 properties TYPE & PAYLOAD
// ACTION CREATOR: a function that return an action
export const loadAllTodo = todos => {
    return {
        type: todoActionTypes.LOAD_ALL,
        payload: todos
    }
}

export const addTodo = todo => {
    return {
        type: todoActionTypes.ADD,
        payload: todo
    };
}

export const editTodo = todo => {
    return {
        type: todoActionTypes.EDIT,
        payload: todo
    }
}

export const deleteTodo = todoId => {
    return {
        type: todoActionTypes.DELETE,
        payload: todoId
    }
}
