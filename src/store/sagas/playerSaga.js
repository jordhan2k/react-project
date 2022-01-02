import { all, put, takeLatest } from "redux-saga/effects";
import playerApi from "../../api/playerApi";
import { snackbarSeverity } from "../../utils/constants";
import { playerActionTypes } from "../actions/actionTypes";
import { fetchAllTracksSucceed, saveTrackSucceed, fetchPlaylistsSucceed, addPlaylistSucceed, deletePlaylistSucceed, addTrackPlaylistSucceed } from "../actions/playerActions";
import { openSnackbar } from "../actions/snackbarActions";

function* fetchAllTracks() {
    try {
        const response = yield playerApi.getAllTracks();
        yield put(fetchAllTracksSucceed(response.data));
        yield console.log(response.data);
    } catch (error) {
        yield put(openSnackbar({
            severity: snackbarSeverity.ERROR,
            message: error
        }))
    }
}

function* fetchAllTracksWatcher() {
    yield takeLatest(playerActionTypes.FETCH_TRACKS_REQUEST, fetchAllTracks);
}

function* fetchAllPlaylists() {
    try {
        const response = yield playerApi.getAllPlaylists();
        const playlists = response.data;
        console.log(playlists);
        if (playlists.length)
            for (let list of playlists) {
                console.log(list);
                const tracks = yield playerApi.fetchPlaylistTracks(list._id);
                list.tracks = tracks.data;
            }
        yield put(fetchPlaylistsSucceed(playlists));
    } catch (error) {
        yield put(openSnackbar({
            severity: snackbarSeverity.ERROR,
            message: error
        }))
    }
}

function* fetchAllPlaylistsWatcher() {
    yield takeLatest(playerActionTypes.FETCH_PLAYLISTS_REQUEST, fetchAllPlaylists);
}


function* saveTrack(action) {
    try {
        const track = action.payload;
        const response = yield playerApi.saveTrack(track);
        yield put(saveTrackSucceed(response.data));
        yield put(openSnackbar({
            severity: snackbarSeverity.SUCCESS,
            message: "Happy listening!"
        }));
    } catch (error) {
        yield put(openSnackbar({
            severity: snackbarSeverity.ERROR,
            message: "Oops! Something went wrong!"
        }));
    }
}

function* saveTrackWatcher() {
    yield takeLatest(playerActionTypes.SAVE_TRACK_REQUEST, saveTrack);
}

function* addPlaylist(action) {
    const playlist = action.payload;
    try {
        const response = yield playerApi.addPlaylist(playlist);
        yield put(addPlaylistSucceed(response.data));
        yield put(openSnackbar({
            severity: snackbarSeverity.SUCCESS,
            message: "Happy listening! Yay!"
        }))
    } catch (error) {
        yield put(openSnackbar({
            severity: snackbarSeverity.ERROR,
            message: "Oops! Something happened!"
        }))
    }
}

function* addPlaylistWatcher() {
    yield takeLatest(playerActionTypes.ADD_PLAYLIST_REQUEST, addPlaylist);
}

function* deletePlaylist(action) {
    const id = action.payload;
    try {
        const response = yield playerApi.deletePlaylist(id);
        if (response.status === 200) {
            yield put(deletePlaylistSucceed(id));
            yield put(openSnackbar({
                severity: snackbarSeverity.SUCCESS,
                message: "Oops! You dropped a playlist!"
            }))
        }
    } catch (error) {
        console.log(error);
        yield put(openSnackbar({
            severity: snackbarSeverity.ERROR,
            message: "Oops! Something happened!"
        }))
    }

}

function* deletePlaylistWatcher() {
    yield takeLatest(playerActionTypes.DELETE_PLAYLIST_REQUEST, deletePlaylist);
}


function* addTrackToPlaylist(action) {
    const { track, playlistId } = action.payload;
    console.log("add track playlist saga reached", track, playlistId);
    try {
        const response = yield playerApi.addTrackToPlaylist(track, playlistId);
        if (response.status === 201) {
            yield put(addTrackPlaylistSucceed(response.data));
            yield put(openSnackbar({
                severity: snackbarSeverity.SUCCESS,
                message: "Added to playlist"
            }))
        }
    } catch (error) {
        console.log(error);
        yield put(openSnackbar({
            severity: snackbarSeverity.ERROR,
            message: "Oops! Something happened!"
        }))
    }
}

function* addTrackToPlaylistWatcher() {
    yield takeLatest(playerActionTypes.ADD_TRACK_PLAYLIST_REQUEST, addTrackToPlaylist)
}




















function* playerSaga() {
    yield all([
        fetchAllTracksWatcher(),
        saveTrackWatcher(),
        fetchAllPlaylistsWatcher(),
        addPlaylistWatcher(),
        deletePlaylistWatcher(),
        addTrackToPlaylistWatcher(),
    ]);
}


export default playerSaga;