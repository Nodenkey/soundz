import {CHANGE_PLAYING} from "./constants";

export const setNowPlaying = (songName) => ({
    type: CHANGE_PLAYING,
    payload: songName,
});