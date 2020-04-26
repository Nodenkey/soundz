import {combineReducers} from "redux";

import playAlbumReducer from './player/player.reducer';

const rootReducer = combineReducers({
    playAlbum: playAlbumReducer
});

export default rootReducer;