import { playerActionTypes } from "./actionTypes";


export const fetchAllTracksRequest = () => ({
    type: playerActionTypes.FETCH_TRACKS_REQUEST
});

export const fetchAllTracksSucceed = tracks => ({
    type: playerActionTypes.FETCH_TRACKS_SUCCEED,
    payload: tracks
});

export const fetchAllTracksFail = () => ({
    type: playerActionTypes.ADD_PLAYLIST_FAIL
});


export const saveTrackRequest = track => ({
    type: playerActionTypes.SAVE_TRACK_REQUEST,
    payload: track
});

export const saveTrackSucceed = track => ({
    type: playerActionTypes.SAVE_TRACK_SUCCEED,
    payload: track
});

export const saveTrackFail = () => ({
    type: playerActionTypes.SAVE_TRACK_FAIL
});

export const changeCurrentTrack = track => ({
    type: playerActionTypes.CHANGE_CURRENT_TRACK,
    payload: track
})


export const fetchPlaylistsRequest = () => ({
    type: playerActionTypes.FETCH_PLAYLISTS_REQUEST
});

export const fetchPlaylistsSucceed = playlists => ({
    type: playerActionTypes.FETCH_PLAYLISTS_SUCCEED,
    payload: playlists
});

export const addPlaylistRequest = playlist => ({
    type: playerActionTypes.ADD_PLAYLIST_REQUEST,
    payload: playlist
});

export const addPlaylistSucceed = playlist => ({
    type: playerActionTypes.ADD_PLAYLIST_SUCCEED,
    payload: playlist
});

export const deletePlaylistRequest = playlistId => ({
    type: playerActionTypes.DELETE_PLAYLIST_REQUEST,
    payload: playlistId
});

export const deletePlaylistSucceed = playlistId => ({
    type: playerActionTypes.DELETE_PLAYLIST_SUCCEED,
    payload: playlistId
})

export const addTrackPlaylistRequest = (track, playlistId) => ({
    type: playerActionTypes.ADD_TRACK_PLAYLIST_REQUEST,
    payload: {track, playlistId}
});

export const addTrackPlaylistSucceed = track => ({
    type: playerActionTypes.ADD_TRACK_PLAYLIST_SUCCEED,
    payload: track
});

