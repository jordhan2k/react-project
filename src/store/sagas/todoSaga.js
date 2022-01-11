import { all,  put, takeEvery } from 'redux-saga/effects';
import { addTodoFail, addTodoSucceed, deleteTodoFail, deleteTodoSucceed, editTodoFail, editTodoSucceed, fetchTodosFail, fetchTodosSucceed } from "../actions/todoActions";
import { todoActionTypes } from "../actions/actionTypes";
import todoApi from "../../api/todoApi";
import { openSnackbar } from "../actions/snackbarActions";


function* fetchAllTodos() {
    try {
        const response = yield todoApi.getAll();
        yield put(fetchTodosSucceed(response.data.todos));
      
    } catch (error) {
        yield put(fetchTodosFail(error.message ? error.message : error));
    }
}

function* fetchAllTodosWatcher() {
    yield takeEvery(todoActionTypes.FETCH_TODOS_REQUEST, fetchAllTodos);
}

function* addNewTodo(action) {
    const todo = action.payload;
    try {
        const response = yield todoApi.addTodo(todo);
        yield put(addTodoSucceed(response.data.todo));
        yield put(openSnackbar({
            severity: "success",
            message: "Hooray! Todo added."
        }))
    } catch (error) {
        yield put(addTodoFail(error));
        yield put(openSnackbar({
            severity: "error",
            message: "Oops! Something went wrong!"
        }))
    }
}

function* addNewTodoWatcher() {
    yield takeEvery(todoActionTypes.ADD_TODO_REQUEST, addNewTodo);
}

function* editTodo(action) {
    const editedTodo = action.payload;
    try {
        const response = yield todoApi.editTodo(editedTodo);
        yield put(editTodoSucceed(response.data.todo));
    } catch (error) {
        yield put(editTodoFail(error));
    }
}

function* editTodoWatcher() {
    yield takeEvery(todoActionTypes.EDIT_REQUEST, editTodo);
}

function* deleteTodo(action) {
    const todoId = action.payload;
    try {
        const response = yield todoApi.deleteTodo(todoId);
        if (response.status === 200)
            yield put(deleteTodoSucceed(todoId));
            yield put(openSnackbar({
                severity: "success",
                message: "Yay! Todo deleted!"
            }))
    } catch (error) {
        yield put(deleteTodoFail(error));
    }
}

function* deleteTodoWatcher() {
    yield takeEvery(todoActionTypes.DELETE_REQUEST, deleteTodo);
}

export default function* watcherSaga() {
    yield all([
        fetchAllTodosWatcher(),
        addNewTodoWatcher(),
        editTodoWatcher(),
        deleteTodoWatcher()
    ])
}

