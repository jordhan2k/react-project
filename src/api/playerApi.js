import axiosClient from "./axiosClient";

const trackUrl = "/tracks";
const playlistUrl = "playlists";

class PlayerApi {

    getAllTracks() {
        return axiosClient.get(trackUrl);
    }

    getTrackById(trackId) {
        return axiosClient.get(`${trackUrl}/${trackId}`);
    }

    getAllPlaylists() {
        return axiosClient.get(playlistUrl);
    }

    saveTrack(track) {
        return axiosClient.post(trackUrl, track);
    }

    addPlaylist(playlist) {
        return axiosClient.post(playlistUrl, playlist);
    }

    deletePlaylist(id) {
        return axiosClient.delete(`${playlistUrl}/${id}`);
    }

    addTrackToPlaylist(track, playlistId) {
        return axiosClient.post(`${playlistUrl}/${playlistId}/tracks`, track);
    }

    fetchPlaylistTracks(playlistId) {
        return axiosClient.get(`${playlistUrl}/${playlistId}/tracks`);
    }





}

const playerApi = new PlayerApi();
export default playerApi;