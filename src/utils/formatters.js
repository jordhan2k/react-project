export const formatMs = ms => {
    const seconds = Math.floor(ms / 1000);
    const minute = Math.floor(seconds / 60);
    const second = seconds % 60;
    return `${minute}:${second < 10 ? `0${second}` : `${second}`}`;
}