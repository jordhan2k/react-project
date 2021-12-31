import { todoActionTypes } from "./actionTypes";

// ACTION: a JS object with 2 properties TYPE & PAYLOAD
// ACTION CREATOR: a function that return an action
export const fetchTodosRequest = () => ({
    type: todoActionTypes.FETCH_TODOS_REQUEST
});


export const fetchTodosSucceed = todos => ({
    type: todoActionTypes.FETCH_TODOS_SUCCEED,
    payload: todos
});

export const fetchTodosFail = error => ({
    type: todoActionTypes.FETCH_TODOS_FAIL,
    payload: error
});

export const addTodoRequest = todo => ({
    type: todoActionTypes.ADD_TODO_REQUEST,
    payload: todo
});

export const addTodoSucceed = todo => ({
    type: todoActionTypes.ADD_TODO_SUCCEED,
    payload: todo
});

export const addTodoFail = error => ({
    type: todoActionTypes.ADD_TODO_FAIL,
    payload: error
});

export const editTodoRequest = editedTodo => ({
    type: todoActionTypes.EDIT_REQUEST,
    payload: editedTodo
});

export const editTodoSucceed = editedTodo => ({
    type: todoActionTypes.EDIT_SUCCEED,
    payload: editedTodo
});

export const editTodoFail = error => ({
    type: todoActionTypes.EDIT_FAIL,
    payload: error
});

export const deleteTodoRequest = todoId => ({
    type: todoActionTypes.DELETE_REQUEST,
    payload: todoId
});

export const deleteTodoSucceed = todoId => ({
    type: todoActionTypes.DELETE_SUCCEED,
    payload: todoId
});

export const deleteTodoFail = error => ({
    type: todoActionTypes.DELETE_FAIL,
    payload: error
});

