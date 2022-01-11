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

export const todoFilterActionTypes = {
    STATUS_CHANGE: "todoFilter/statusChange"
}

export const snackbarActionTypes = {
    OPEN: "snackbar/open",
    CLOSE: "snackbar/close"
}

export const playerActionTypes = {
    FETCH_TRACKS_REQUEST: "player/tracks/fetchAllRequest",
    FETCH_TRACKS_SUCCEED: "player/tracks/fetchAllSucceed",
    FETCH_TRACKS_FAIL: "player/tracks/fetchAllFail",

    SAVE_TRACK_REQUEST: "player/tracks/saveRequest",
    SAVE_TRACK_SUCCEED: "player/tracks/saveSucceed",
    SAVE_TRACK_FAIL: "player/tracks/saveFail",

    FETCH_PLAYLISTS_REQUEST: "player/playlists/fetchAllRequest",
    FETCH_PLAYLISTS_SUCCEED: "player/playlists/fetchAllSucceed",
    FETCH_PLAYLISTS_FAIL: "player/playlists/fetchAllFail",

    ADD_PLAYLIST_REQUEST: "player/playlists/addRequest",
    ADD_PLAYLIST_SUCCEED: "player/playlists/addSucceed",
    ADD_PLAYLIST_FAIL: "player/playlists/addFail",

    DELETE_PLAYLIST_REQUEST: "player/playlists/deleteRequest",
    DELETE_PLAYLIST_SUCCEED: "player/playlists/deleteSucceed",
    DELETE_PLAYLIST_FAIL: "player/playlists/deleteFail",

    ADD_TRACK_PLAYLIST_REQUEST: "player/playlists/addTrackRequest",
    ADD_TRACK_PLAYLIST_SUCCEED: "player/playlists/addTrackSucceed",
    ADD_TRACK_PLAYLIST_FAIL: "player/playlists/addTrackFail",

    REMOVE_TRACK_PLAYLIST_REQUEST: "player/playlists/removeTrackRequest",
    REMOVE_TRACK_PLAYLIST_SUCCEED: "player/playlists/removeTrackSucceed",
    REMOVE_TRACK_PLAYLIST_FAIL: "player/playlists/removeTrackFail",

    CHANGE_CURRENT_TRACK: "player/tracks/changeCurrentTrack",
    CHANGE_PLAY_STATE: "player/play/changeState",

}

export const authActionTypes = {
    LOAD_USER_REQUEST: "auth/loadUser/request",
    LOAD_USER_SUCCESS: "auth/loadUser/success",
    LOAD_USER_FAIL: "auth/loadUser/fail",

    LOGIN_REQUEST: "auth/login/request",
    LOGIN_SUCCESS: "auth/login/success",
    LOGIN_FAIL: "auth/login/fail",

    REGISTER_REQUEST: "auth/register/request",
    REGISTER_SUCCESS: "auth/register/success",
    REGISTER_FAIL: "auth/register/fail",

    LOGOUT_REQUEST: "auth/logout/request",
    LOGOUT_SUCCESS: "auth/logout/success"
}