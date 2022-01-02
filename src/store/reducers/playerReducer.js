import { playerActionTypes } from "../actions/actionTypes";



const initialState = {
    isPlaying: false,
    currentTrack: {},
    currentPlaylist: {},
    currentQueue: "0",
    tracks: [],
    playlists: [],
}

const playerReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case playerActionTypes.FETCH_TRACKS_SUCCEED:
            return {
                ...state,
                tracks: payload
            };

        case playerActionTypes.SAVE_TRACK_SUCCEED:
            return {
                ...state,
                tracks: [...state.tracks, payload]
            };

        case playerActionTypes.CHANGE_CURRENT_TRACK:
            return {
                ...state,
                currentTrack: payload,
                currentQueue: !payload.playlistId
                    ? "0"
                    : payload.playlistId
            }

        case playerActionTypes.FETCH_PLAYLISTS_SUCCEED:
            return {
                ...state,
                playlists: payload
            }

        case playerActionTypes.ADD_PLAYLIST_SUCCEED:
            return {
                ...state,
                playlists: [...state.playlists, payload]
            }

        case playerActionTypes.DELETE_PLAYLIST_SUCCEED:
            return {
                ...state,
                playlists: state.playlists.filter(item => item._id !== payload)
            }

        case playerActionTypes.ADD_TRACK_PLAYLIST_SUCCEED:

            const targetPlaylist = state.playlists.find(item => item._id === payload.playlistId);
            targetPlaylist.tracks = [...targetPlaylist.tracks, payload];

            return {
                ...state,
                playlists: state.playlists.map(item => item._id === targetPlaylist._id
                    ? targetPlaylist
                    : item)
            }

        case playerActionTypes.CHANGE_PLAY_STATE:
            return {
                ...state,
                isPlaying: payload
            }

        default:
            return state;
    }
}

export default playerReducer;