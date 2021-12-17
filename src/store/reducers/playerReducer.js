const initialState = {
    songs: [],
    playlists: [],
}

const playerReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        default:
            return state;
    }
}

export default playerReducer;