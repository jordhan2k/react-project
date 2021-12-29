export const color = {
    primaryGray: "#F2F0F0",
    primaryBlue: "#77D4E5",
    primaryGreen: "#8AC186",
    primaryBeige: "#FDF4C3",
    primaryPurple: "#D6C8F6",
    secondaryDarkBlue: "#3A3B59"
}

export const FILTER_ALL = "All";
export const FILTER_OPEN = "Open";
export const FILTER_COMP = "Completed"


export const todoActionTypes = {
    FETCH_TODOS_REQUEST: "todos/fetchTodosRequest",
    FETCH_TODOS_SUCCEED: "todos/fetchTodosSucceed",
    FETCH_TODOS_FAIL: "todos/fetchTodosFail",

    ADD_TODO_REQUEST: "todos/addTodoRequest",
    ADD_TODO_SUCCEED: "todos/addTodoSucceed",
    ADD_TODO_FAIL: "todos/addTodoFail",

    EDIT_REQUEST: "todos/editTodoRequest",
    EDIT_SUCCEED: "todos/editTodoSucceed",
    EDIT_FAIL: "todos/editTodoFail",

    DELETE_REQUEST: "todos/deleteTodoRequest",
    DELETE_SUCCEED: "todos/deleteTodoSucceed",
    DELETE_FAIL: "todos/deleteTodoFail",
}

export const toastTypes = {
    SUCCEED: "toast/succeed",
    FAIL: "toast/fail",
    WARNING: "toast/warning"
}

export const todoFilterActionTypes = {
    STATUS_CHANGE: "todoFilter/statusChange"
}


export const todoFilters = [
    {
        status: "All",
        color: color.primaryBlue
    },
    {
        status: "Open",
        color: color.primaryBeige
    },
    {
        status: "Completed",
        color: color.primaryGreen
    }
];

export const statusTypes = {
    IDLE: "IDLE",
    LOADING: "LOADING",
    SUCCEEDED: "SUCCEEDED",
    FAILED: "FAILED"
}

export const todosApi = "https://61c0b46e33f24c00178235a4.mockapi.io/api/v1/todos";