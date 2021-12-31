import axiosClient from "./axiosClient";


class PlayerApi {

    getAllTracks () {
        const url = "/tracks";
        return axiosClient.get(url);
    }

    getTrackById (trackId) {
        const url = `/tracks/${trackId}`;
        return axiosClient.get(url);
    }

    getAllPlaylists () {
        const url = "/playlists"
        return axiosClient.get(url);
    }

    saveTrack (track) {
        const url = "/tracks"
        return axiosClient.post(url, track);
    }





}

const playerApi = new PlayerApi();
export default playerApi;