import { todoActions } from "../../utils/constants";

// ACTION: a JS object with 2 properties TYPE & PAYLOAD
// ACTION CREATOR: a function that return an action

export const addTodo = todo => {
    return {
        type: todoActions.ADD,
        payload: todo
    };
}

export const editTodo = todo => {
    return {
        type: todoActions.EDIT,
        payload: todo
    }
}

export const deleteTodo = todoId => {
    return {
        type: todoActions.DELETE,
        payload: todoId
    }
}
